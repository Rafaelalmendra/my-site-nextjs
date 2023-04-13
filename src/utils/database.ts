import { db } from "services/firebase";
import { set, ref, get } from "firebase/database";

interface WriteProps {
  path: string;
  data: any;
}

export const writeToDatabase = async ({ path, data }: WriteProps) => {
  try {
    await set(ref(db, path), data);
  } catch (error) {
    console.error(`WriteToDatabase | ${path} | ${error}`);
  }
};

export const getData = async (path: string) => {
  try {
    const snapshot = await get(ref(db, path));
    return snapshot.val();
  } catch (error) {
    console.log(`getData | ${path} | ${error}`);
  }
};
