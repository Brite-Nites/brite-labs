export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light bg-background text-foreground min-h-screen">
      {children}
    </div>
  );
}
