import type { Metadata } from "next";

import { PhaseNotice } from "@/components/shared/phase-notice";

export const metadata: Metadata = {
  title: "Administration",
};

export default function AdminDashboardPage() {
  return (
    <PhaseNotice
      description="Le back-office donnera à l’équipe NOVANOX une vue centralisée sur les clients, briefs, projets, devis, factures et contenus."
      eyebrow="Administration NOVANOX"
      status="Cet espace restera réservé aux comptes invités. Les rôles et contrôles d’autorisation serveur seront ajoutés avant toute donnée métier."
      title="Le poste de pilotage est en construction."
    />
  );
}
