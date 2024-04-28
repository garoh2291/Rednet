export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-main-bg w-full min-h-[calc(100vh-80px)] bg-center bg-no-repeat">
      {children}
    </div>
  );
}
