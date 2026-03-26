import { useState } from "react";

export default function AgentPanel({ onAsk, loading }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleAsk(e) {
    e.preventDefault();
    const response = await onAsk(question);
    setAnswer(response || "No response");
  }

  return (
    <div className="card animate-rise">
      <h3 className="text-lg font-semibold text-ink">AI Agent Assistant</h3>
      <p className="mt-1 text-sm text-slate-500">Ask strategy questions from the analyzed Twitter URLs.</p>
      <form onSubmit={handleAsk} className="mt-4 flex gap-2">
        <input
          className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-sky"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask after analyzing links..."
        />
        <button
          disabled={loading}
          className="rounded-xl bg-ink px-4 py-2 text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Thinking" : "Ask"}
        </button>
      </form>
      {answer ? <div className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">{answer}</div> : null}
    </div>
  );
}
