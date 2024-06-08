import { signIn } from "./auth";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Sign in with GitHub
        </button>
      </form>
    </main>
  );
}
