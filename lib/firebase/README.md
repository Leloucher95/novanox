# Firebase adapters

Ce dossier contient les adaptateurs techniques Firebase :

- `client.ts` : initialisation du SDK Web, utilisable côté navigateur ;
- `admin.ts` : initialisation du SDK Admin, marquée `server-only` ;
- `client.ts` initialise une seule application Firebase Web et exporte Auth, Firestore et Storage ;
- `admin.ts` est protégé par `server-only`, initialise une seule application Admin et exporte les services privilégiés.

Ne jamais importer un module Firebase Admin depuis un Client Component. Les identifiants de service et clés privées restent exclusivement dans les variables d’environnement serveur.
