# Architecture technique NOVANOX

## 1. Vue d'ensemble

NOVANOX est une plateforme Next.js composée de trois espaces qui partagent le même socle technique :

- le site public d'acquisition ;
- le portail client sécurisé ;
- le back-office sécurisé de l'équipe NOVANOX.

Le routage s'appuie sur les groupes de routes de l'App Router : `(public)`, `(auth)`, `(client)` et `(admin)`. Les groupes organisent le code sans modifier les URL publiques.

Firebase constitue le backend applicatif :

- Firebase Authentication pour l'identité ;
- Cloud Firestore pour les données métier ;
- Cloud Storage pour les fichiers ;
- Firebase App Check pour limiter les clients non autorisés ;
- Firebase Admin SDK dans les modules serveur uniquement ;
- Firebase Emulator Suite pour les tests locaux.

## 2. Frontières du code

```text
app/          Routage, layouts, métadonnées et composition des pages
components/   Composants visuels et primitives partagées
features/     Logique métier organisée par domaine
lib/          Adaptateurs techniques et services transversaux
config/       Constantes de marque et navigation
types/        Contrats TypeScript partagés
firebase/     Règles Firestore/Storage et index versionnés
tests/        Tests unitaires, intégration et end-to-end
sources/      Documents et références de conception d'origine
```

Les fichiers de routes doivent rester fins. Ils composent les composants et appellent les API publiques des domaines présents dans `features/`.

## 3. Domaines métier

Domaines prévus :

- `auth`
- `companies`
- `services`
- `briefs`
- `projects`
- `messaging`
- `files`
- `quotes`
- `invoices`
- `portfolio`
- `blog`
- `notifications`

Chaque domaine peut contenir ses composants, schémas de validation, actions serveur, requêtes et types internes. Un domaine ne doit pas importer directement les fichiers internes d'un autre domaine.

## 4. Modèle Firestore proposé

Collections principales :

- `users`
- `companies`
- `services`
- `briefs`
- `projects`
- `quotes`
- `invoices`
- `portfolioItems`
- `articles`
- `notifications`
- `auditLogs`

Sous-collections recommandées :

- `projects/{projectId}/steps`
- `projects/{projectId}/messages`
- `projects/{projectId}/files`

Les documents privés doivent porter les informations nécessaires aux règles d'accès : `clientId`, `companyId`, `assignedUserIds`, `createdBy`, `createdAt` et `updatedAt` selon le domaine.

Les montants sont stockés en entier dans la plus petite unité monétaire, accompagnés d'un code devise. Les fichiers binaires sont stockés dans Cloud Storage, jamais dans Firestore.

## 5. Autorisation

Les rôles fonctionnels sont :

- `SUPER_ADMIN`
- `ADMIN`
- `EMPLOYEE`
- `CLIENT`

La sécurité repose sur plusieurs couches complémentaires :

1. vérification de session côté serveur ;
2. contrôle de rôle et de propriété dans les opérations serveur ;
3. règles Firestore et Storage fermées par défaut ;
4. custom claims ou rôle serveur fiable pour les comptes internes ;
5. journalisation des actions critiques.

Masquer un bouton ou une route dans l'interface ne constitue jamais une autorisation.

## 6. Phases de construction

### Phase 1 — Socle

- architecture des dossiers ;
- design tokens ;
- variables d'environnement ;
- configuration Firebase et émulateurs ;
- règles fermées par défaut ;
- métadonnées, robots et sitemap initiaux.

### Phase 2 — Authentification

- inscription client ;
- vérification email ;
- connexion et réinitialisation ;
- invitation de l'équipe ;
- sessions serveur et custom claims ;
- tests des règles.

### Phase 3 — Parcours vertical minimal

- catalogue de services ;
- soumission d'un brief ;
- traitement admin ;
- création et suivi d'un projet ;
- dépôt d'un livrable ;
- notification client.

### Phase 4 — Gestion commerciale

- devis ;
- factures ;
- génération PDF ;
- emails transactionnels ;
- suivi des statuts.

### Phase 5 — Contenu et optimisation

- portfolio ;
- blog ;
- SEO ;
- performance ;
- accessibilité ;
- tests end-to-end.

## 7. État du socle Firebase

Les SDK Firebase Web et Admin sont installés. Leurs initialisations sont séparées dans `lib/firebase/client.ts` et `lib/firebase/admin.ts`, idempotentes et protégées par les marqueurs `client-only` et `server-only`. La validation des variables d'environnement est centralisée dans `lib/env/` et ne révèle jamais leur valeur dans les messages d'erreur.

L'authentification, les sessions serveur et les règles d'autorisation métier restent différées à la phase Auth. Les règles actuellement versionnées refusent tout accès. Elles devront être remplacées uniquement avec des tests d'émulateur couvrant chaque rôle et chaque propriété de ressource.
