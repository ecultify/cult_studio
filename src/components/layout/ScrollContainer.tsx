

interface ScrollContainerProps {
  children: React.ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}