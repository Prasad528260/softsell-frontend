import { useState, useRef } from 'react';

// NOTE: You must set your OpenAI API key securely (never commit it to the repo)
// For production, use a backend proxy to keep your API key safe!

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am SoftSell AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);

    try {

      const apiBase = import.meta.env.VITE_API_URL || '';
    const res = await fetch(`${apiBase}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].slice(-10)
        })
      });
      const data = await res.json();
      const aiMessage = data.choices?.[0]?.message?.content?.trim() || 'Sorry, something went wrong.';
      setMessages((msgs) => [...msgs, { role: 'assistant', content: aiMessage }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: 'assistant', content: 'Sorry, I could not connect to the AI.' }]);
    }
    setLoading(false);
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-cyan-400 flex flex-col" style={{ minHeight: 420 }}>
      <div className="p-4 border-b border-cyan-400 font-bold text-cyan-600 dark:text-cyan-300 text-lg flex items-center gap-2">
        <span>💬 SoftSell AI Chat</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3" style={{ maxHeight: 260 }}>
        {messages.map((msg, i) => (
          <div key={i} className={`text-sm rounded-lg px-3 py-2 whitespace-pre-line ${msg.role === 'user' ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100 self-end ml-10' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 self-start mr-10'}`}>
            {msg.content}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex items-center border-t border-cyan-400">
        <input
          className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-cyan-900 dark:text-cyan-100 placeholder-cyan-400"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          className="px-4 py-3 text-cyan-600 dark:text-cyan-300 font-bold hover:text-violet-700 disabled:opacity-50"
          type="submit"
          disabled={loading || !input.trim()}
        >
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
