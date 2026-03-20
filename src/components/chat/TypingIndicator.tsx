export function TypingIndicator() {
  return (
    <div className="mb-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl text-lg" style={{ background: 'rgba(167,139,250,0.18)', color: 'var(--violet)' }}>
          🎓
        </div>
        <div className="max-w-[80%] rounded-[4px_18px_18px_18px] border px-5 py-4 md:max-w-[65%]" style={{ background: "var(--bg-raised)", borderColor: "rgba(15,23,42,0.1)" }}>
          <div className="flex items-center gap-2">
            <span className="typing-dot h-2 w-2 rounded-full" style={{ animationDelay: "0s", background: "rgba(15,23,42,0.25)" }} />
            <span className="typing-dot h-2 w-2 rounded-full" style={{ animationDelay: "0.15s", background: "rgba(15,23,42,0.25)" }} />
            <span className="typing-dot h-2 w-2 rounded-full" style={{ animationDelay: "0.3s", background: "rgba(15,23,42,0.25)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
