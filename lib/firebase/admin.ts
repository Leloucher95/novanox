import "server-only";

import {
  cert,
  getApps,
  initializeApp,
  type App,
} from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage, type Storage } from "firebase-admin/storage";

import { publicEnv } from "@/lib/env/public";
import { serverEnv } from "@/lib/env/server";

const existingFirebaseAdminApp = getApps().find(
  (app) => app.name === "[DEFAULT]",
);

export const firebaseAdminApp: App =
  existingFirebaseAdminApp ??
  initializeApp({
        credential: cert(serverEnv.firebaseAdmin),
        projectId: serverEnv.firebaseAdmin.projectId,
        storageBucket: publicEnv.firebase.storageBucket,
      });

export const firebaseAdminAuth: Auth = getAuth(firebaseAdminApp);
export const firebaseAdminFirestore: Firestore = getFirestore(firebaseAdminApp);
export const firebaseAdminStorage: Storage = getStorage(firebaseAdminApp);
