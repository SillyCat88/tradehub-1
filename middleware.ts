import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req }); // Отримуємо JWT токен
  const { pathname } = req.nextUrl; // Отримуємо шлях запиту

  // Захищаємо маршрут '/dashboard'
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      // Якщо користувач не залогінений, перенаправляємо на сторінку входу
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Якщо користувач вже залогінений і знаходиться на сторінці входу, перенаправляємо на дашборд
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next(); // Дозволяємо продовжити запит
}

export const config = {
  matcher: ['/dashboard', '/login'],
};
