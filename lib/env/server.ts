import "server-only";

import { EnvironmentConfigurationError, requireEnvironmentVariables } from "@/lib/env/validation";

const environment = requireEnvironmentVariables("Firebase Admin", {
  FIREBASE_ADMIN_PROJECT_ID: process.env.FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_CLIENT_EMAIL: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  FIREBASE_ADMIN_PRIVATE_KEY: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
});

const privateKey = environment.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n");

if (
  !privateKey.includes("-----BEGIN PRIVATE KEY-----") ||
  !privateKey.includes("-----END PRIVATE KEY-----")
) {
  throw new EnvironmentConfigurationError(
    "Firebase Admin",
    ["FIREBASE_ADMIN_PRIVATE_KEY"],
    "format de clé privée invalide",
  );
}

export const serverEnv = {
  firebaseAdmin: {
    projectId: environment.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: environment.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey,
  },
} as const;
