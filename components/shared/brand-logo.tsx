import Image from "next/image";
import Link from "next/link";

import { brand } from "@/config/brand";

type BrandLogoProps = Readonly<{
  priority?: boolean;
}>;

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <Link aria-label="NOVANOX — Accueil" className="brand-logo" href="/">
      <Image
        alt=""
        className="brand-logo__image"
        height={88}
        priority={priority}
        src="/brand/novanox-logo.jpeg"
        width={88}
      />
      <span className="brand-logo__copy">
        <span className="brand-logo__name">{brand.name}</span>
        <span className="brand-logo__description">{brand.description}</span>
      </span>
    </Link>
  );
}
