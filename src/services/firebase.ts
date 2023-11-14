import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const env = {
  API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  DATABASE_URL: process.env.NEXT_PUBLIC_FIREBASE_DATA_BASE_URL || "",
  PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  MESSAGING_SENDER_ID:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
