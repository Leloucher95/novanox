import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";

const platformSteps = [
  {
    number: "01",
    title: "Découvrir les services",
    description:
      "Identifier l’accompagnement adapté à votre besoin de communication ou de création digitale.",
  },
  {
    number: "02",
    title: "Soumettre un projet",
    description:
      "Créer un compte client et transmettre un brief structuré avec les éléments utiles à sa réalisation.",
  },
  {
    number: "03",
    title: "Suivre sa réalisation",
    description:
      "Retrouver l’avancement, les échanges et les livrables du projet dans un même espace sécurisé.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="public-home">
      <section className="site-container hero">
        <div className="hero__content">
          <p className="eyebrow">Communication et création digitale</p>
          <h1>
            NOVANOX donne un cap numérique à <span>vos idées.</span>
          </h1>
          <p className="hero__intro">
            Une agence de communication et de création digitale pensée pour
            relier votre besoin, sa réalisation et le suivi de votre projet au
            sein d’une même plateforme.
          </p>
          <div className="hero__actions">
            <ButtonLink href="#plateforme" showArrow>
              Découvrir nos services
            </ButtonLink>
            <ButtonLink href="/client/register" showArrow variant="secondary">
              Créer un compte
            </ButtonLink>
          </div>
        </div>

        <div className="hero__visual">
          <Image
            alt="Identité visuelle NOVANOX"
            className="hero__logo"
            height={1254}
            priority
            sizes="(min-width: 832px) 35vw, 88vw"
            src="/brand/novanox-logo.jpeg"
            width={1254}
          />
          <p className="hero__caption">
            <span aria-hidden="true" className="hero__caption-dot" />
            Plateforme agence et client
          </p>
        </div>
      </section>

      <section className="platform" id="plateforme">
        <div className="site-container">
          <div className="platform__header">
            <p className="eyebrow">Un parcours unifié</p>
            <h2>Du premier besoin à la livraison.</h2>
            <p className="platform__intro">
              La plateforme NOVANOX est conçue pour centraliser chaque étape de
              la relation entre votre entreprise et l’agence.
            </p>
          </div>

          <div className="platform__grid">
            {platformSteps.map((step) => (
              <article className="platform-step" key={step.number}>
                <span className="platform-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
