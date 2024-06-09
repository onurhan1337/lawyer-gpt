import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const reqUrl = new URL(req.url);
    const supabase = createRouteHandlerClient({ cookies });

    await supabase.auth.signOut();

    return NextResponse.redirect(`${reqUrl.origin}/login`, {
        status: 301,
    });
}