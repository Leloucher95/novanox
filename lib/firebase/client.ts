import "client-only";

import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

import { publicEnv } from "@/lib/env/public";

const existingFirebaseClientApp = getApps().find(
  (app) => app.name === "[DEFAULT]",
);

export const firebaseClientApp: FirebaseApp =
  existingFirebaseClientApp ?? initializeApp(publicEnv.firebase);

export const firebaseAuth: Auth = getAuth(firebaseClientApp);
export const firebaseFirestore: Firestore = getFirestore(firebaseClientApp);
export const firebaseStorage: FirebaseStorage = getStorage(firebaseClientApp);
