import { signOut } from "@/app/actions";

export default function LogoutButton() {
  return (
    <form action={signOut} method="post">
      <button className="py-2 px-4 rounded-md no-underline bg-slate-50">
        Logout
      </button>
    </form>
  );
}
