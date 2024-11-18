"use client";

import Preloader from "@/components/Preloader";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [finalError, setFinalError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    }

    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      return;
    }

    setIsLoading(true);
    setFinalError(""); // Clear any previous final error message
    try {
      const loginResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!loginResponse?.error) {
        router.refresh();
        router.replace("/manage-contacts");
      } else {
        setFinalError("Invalid email or password");
      }
    } catch (error) {
      console.error("An error occurred", error);
      setFinalError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="content-wrap" className="site-page">
      <div className="row narrow center-content">
        <div className="col-twelve">
          <h1 className="center-text">Login</h1>

          <form
            name="loginForm"
            id="loginForm"
            method="post"
            action=""
            className="center-form"
            onSubmit={handleSubmit}
          >
            <div className="full-width">
              <input
                name="email"
                type="text"
                id="email"
                className="full-width"
                placeholder="Your Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="full-width">
              <input
                name="password"
                type="password"
                id="password"
                className="full-width"
                placeholder="Your Password"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="submit button-primary full-width">
              Login
            </button>
          </form>
          {finalError && <div className="error final-error">{finalError}</div>}
          {isLoading && <Preloader />}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
