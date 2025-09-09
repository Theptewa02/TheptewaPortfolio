type GlowBorderProps = {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
};

export default function GlowBorder({ children, className = "", colors }: GlowBorderProps) {
  const gradient = colors?.join(", ") || "#3b82f6, #06b6d4, #60a5fa, #a5f3fc, #3b82f6";

  return (
    <div className={`relative p-[3px] rounded-xl ${className}`}>
      <div
        className="absolute inset-0 rounded-xl border-spin z-[-1]"
        style={{ backgroundImage: `conic-gradient(from var(--angle), ${gradient})` }}
      ></div>
      <div
        className="absolute inset-0 rounded-xl border-spin blur-2xl opacity-50 z-[-2]"
        style={{ backgroundImage: `conic-gradient(from var(--angle), ${gradient})` }}
      ></div>

      <div className="relative bg-[#1c1f2b] text-white rounded-xl p-6 text-center">
        {children}
      </div>

      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        .border-spin {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </div>
  );
}
