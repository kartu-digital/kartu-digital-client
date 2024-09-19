'use client';
import useAuth from '@/hooks/useAuth';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  return (
    <div className="w-screen">
      {auth?.user?.email}
      {children}
    </div>
  );
}
