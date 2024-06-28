import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function LoginLayout({ children }: PropsWithChildren) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return <>{children}</>;
}
