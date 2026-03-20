import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
      style={{ background: "#0B1F4D" }}
    >
      <h1 className="text-2xl font-semibold" style={{ color: "#FFFFFF" }}>404 · Page not found</h1>
      <p style={{ color: "rgba(255,255,255,0.82)" }}>The page you were looking for does not exist.</p>
      <Link
        href="/dashboard"
        className="rounded-full px-4 py-2 text-sm font-semibold"
        style={{ background: "rgba(255,255,255,0.16)", border: "0.5px solid rgba(255,255,255,0.28)", color: "#FFFFFF" }}
      >
        Back to dashboard
      </Link>
    </main>
  );
}
