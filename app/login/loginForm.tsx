"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSupabaseClient from "@/utils/supabase/client";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(error.message);
      reset({ password: "" }); // Only reset password to keep email
      setSubmitting(false);
    } else {
      toast.success("Successfully logged in");
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow-md p-8 max-w-md w-full mx-auto"
    >
      <Image
        src="/images/DarkThemeIcon.svg"
        alt="Dark Theme Icon"
        width={100}
        height={100}
        className="mx-auto"
      />
      <h2
        className="text-SubtleGreen font-playfair-display text-center font-regular mb-8"
        style={{ fontSize: "28px" }}
      >
        Fenrisk Login
      </h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-md font-medium font-inter mb-2"
        >
          Username
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="username"
          className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        {errors.email && (
          <span className="text-red-500 text-xs pt-1">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-md font-medium font-inter mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="password"
          className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        {errors.password && (
          <span className="text-red-500 text-xs pt-1">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-SubtleGreen text-white font-medium font-inter py-2 px-4 rounded hover:bg-DarkThemeAccentGreen2 focus:outline-none focus:shadow-outline"
      >
        {isSubmitting ? "Loading..." : "Sign In"}
      </button>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="inline-block align-baseline font-regular text-sm text-blue-500 hover:text-blue-800"
        >
          Forgot your password?
        </a>
      </div>
    </form>
  );
};
