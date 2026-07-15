import {
  parseEnvironmentUrl,
  requireEnvironmentVariables,
} from "@/lib/env/validation";

const environment = requireEnvironmentVariables("publique", {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

export const publicEnv = {
  appUrl: parseEnvironmentUrl(
    "NEXT_PUBLIC_APP_URL",
    environment.NEXT_PUBLIC_APP_URL,
  ),
  firebase: {
    apiKey: environment.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: environment.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: environment.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: environment.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      environment.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: environment.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
} as const;
