"use client";

type UpgradeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: "rgba(15,23,42,0.18)" }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="mx-4 w-full max-w-md overflow-hidden rounded-3xl p-0 shadow-2xl"
        style={{ background: "var(--bg-card)", border: "0.5px solid rgba(124,58,237,0.3)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
      >
        <div className="p-8 text-center text-white" style={{ background: "var(--grad)" }}>
          <p className="text-6xl">⚡</p>
          <h2 className="mt-4 text-2xl font-bold">Unlock Your Full Potential</h2>
          <p className="mt-2 text-white/80">You&apos;ve used all 10 free messages today</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "∞", label: "Unlimited chats" },
              { icon: "📚", label: "All subjects" },
              { icon: "📊", label: "Analytics" },
              { icon: "📥", label: "Export chats" },
            ].map((feature) => (
              <div key={feature.label} className="rounded-2xl p-4 text-center" style={{ background: "rgba(15,23,42,0.04)", border: "0.5px solid var(--border)" }}>
                <p className="text-2xl">{feature.icon}</p>
                <p className="mt-2 text-xs font-medium" style={{ color: "var(--text-muted)" }}>{feature.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p>
              <span className="text-4xl font-bold" style={{ color: "var(--text)" }}>$9.99</span>
              <span className="ml-1" style={{ color: "var(--text-muted)" }}>/month</span>
            </p>
            <p className="mt-1 text-sm text-emerald-600">or $79/year — save 34%</p>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-2xl py-4 text-lg font-semibold text-white"
            style={{ background: "var(--grad)" }}
          >
            Upgrade to Pro
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full text-center text-sm transition-all duration-200"
            style={{ color: "var(--text-muted)" }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
