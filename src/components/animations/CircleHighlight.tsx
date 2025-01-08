

interface CircleHighlightProps {
  children: React.ReactNode;
}

export default function CircleHighlight({ children }: CircleHighlightProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 border-2 border-[#f78800] rounded-full scale-110 transform" />
    </span>
  );
}