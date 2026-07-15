import { BrandLogo } from "@/components/shared/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";

type PhaseNoticeProps = Readonly<{
  description: string;
  eyebrow: string;
  status: string;
  title: string;
}>;

export function PhaseNotice({
  description,
  eyebrow,
  status,
  title,
}: PhaseNoticeProps) {
  return (
    <section className="phase-notice">
      <BrandLogo />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="phase-notice__description">{description}</p>
      <p className="phase-notice__status">{status}</p>
      <ButtonLink href="/" showArrow variant="secondary">
        Revenir à l’accueil
      </ButtonLink>
    </section>
  );
}
