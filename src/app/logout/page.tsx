"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    async function logout() {
      try {
        await signOut({ redirect: false });
      } catch (error) {
        console.error("An error occurred", error);
      } finally {
        router.refresh();
        router.replace("/login");
      }
    }
    logout();
  }, []);
  return null;
};

export default LogoutPage;
