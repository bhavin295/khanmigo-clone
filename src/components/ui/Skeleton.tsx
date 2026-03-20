import clsx from "clsx";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <>
      <style>{`
        @keyframes skeletonPulse {
          0% { opacity: 0.55; }
          50% { opacity: 1; }
          100% { opacity: 0.55; }
        }
      `}</style>
      <div
        className={clsx("rounded-xl", className)}
        style={{
          background: "rgba(15,23,42,0.06)",
          animation: "skeletonPulse 1.4s ease-in-out infinite",
        }}
      />
    </>
  );
}
