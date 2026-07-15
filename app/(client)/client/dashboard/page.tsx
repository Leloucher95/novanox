import type { Metadata } from "next";

import { PhaseNotice } from "@/components/shared/phase-notice";

export const metadata: Metadata = {
  title: "Portail client",
};

export default function ClientDashboardPage() {
  return (
    <PhaseNotice
      description="Le portail centralisera les briefs, projets, messages, fichiers et factures propres à chaque entreprise cliente."
      eyebrow="Portail client"
      status="L’accès authentifié, la vérification d’email et l’isolation des données seront implémentés avec Firebase avant l’ouverture de cet espace."
      title="Votre espace de suivi se prépare."
    />
  );
}
