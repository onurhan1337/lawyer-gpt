"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export async function register(formData: FormData) {
  const supabase = createClient();
  const origin = headers().get("origin");

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return redirect("/register?message=Could not authenticate user");
  }

  revalidatePath("/", "layout");
  return redirect("/login");
}
