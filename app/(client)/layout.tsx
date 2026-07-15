import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
};

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="portal-shell">{children}</main>;
}
