import type { Metadata } from "next";

import { PhaseNotice } from "@/components/shared/phase-notice";

export const metadata: Metadata = {
  title: "Créer un compte client",
};

export default function RegisterPage() {
  return (
    <PhaseNotice
      description="Le parcours d’inscription permettra aux entreprises de créer un compte, puis de vérifier leur adresse email avant d’accéder au portail client."
      eyebrow="Espace d’authentification"
      status="Firebase Authentication n’est pas encore activé dans cette phase. Aucun compte ni utilisateur connecté n’est simulé."
      title="Créer votre compte client"
    />
  );
}
