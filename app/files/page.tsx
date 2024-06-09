"use client";

import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function FilesPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  return (
    <div className="max-w-6xl m-4 sm:m-10 flex flex-col gap-8 grow items-stretch">
      <div className="h-40 flex flex-col justify-center items-center border-b pb-8">
        <Input
          type="file"
          name="file"
          className="cursor-pointer w-full max-w-xs"
          onChange={async (e) => {
            const selectedFile = e.target.files?.[0];

            if (selectedFile) {
              const { error } = await supabase.storage
                .from("files")
                .upload(
                  `${crypto.randomUUID()}/${selectedFile.name}`,
                  selectedFile
                );

              if (error) {
                toast({
                  variant: "destructive",
                  description:
                    "An error occurred while uploading the file. Please try again later.",
                });
              }

              router.push("/chat");
            }
          }}
        />
      </div>
    </div>
  );
}
