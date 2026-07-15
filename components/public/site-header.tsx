import Link from "next/link";

import { BrandLogo } from "@/components/shared/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <BrandLogo priority />
        <nav aria-label="Navigation principale" className="site-header__nav">
          <Link className="site-header__link" href="#plateforme">
            La plateforme
          </Link>
          <ButtonLink href="/client/register" variant="secondary">
            Espace client
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
