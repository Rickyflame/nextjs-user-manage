import { type NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';

export async function middleware(request: NextRequest) {
    //update users auth session
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
        * - _next/static (static files)
         * - _next/image (image optimization files)
        * - favicon.ico (favicon file)
        * feel free to midfy this pattern
        */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ]
}