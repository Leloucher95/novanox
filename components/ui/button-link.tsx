import Link from "next/link";

type ButtonLinkProps = Readonly<{
  children: React.ReactNode;
  href: string;
  showArrow?: boolean;
  variant?: "primary" | "secondary";
}>;

export function ButtonLink({
  children,
  href,
  showArrow = false,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={`button-link button-link--${variant}`} href={href}>
      <span>{children}</span>
      {showArrow ? (
        <span aria-hidden="true" className="button-link__arrow">
          →
        </span>
      ) : null}
    </Link>
  );
}
