import { SiteHeader } from "@/components/public/site-header";
import { brand } from "@/config/brand";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      {children}
      <footer className="site-footer">
        <div className="site-container site-footer__inner">
          <span>{brand.name}</span>
          <span>{brand.description}</span>
        </div>
      </footer>
    </>
  );
}
