import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function FilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <>{children}</>;
}
