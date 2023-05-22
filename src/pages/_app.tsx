import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';
import { SocialLinks } from '@/components/SocialLinks';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => (
  <main className={`${inter.className} prose prose-sm prose-slate mx-auto grid w-full max-w-2xl grid-cols-1 py-4 dark:prose-invert prose-a:no-underline prose-hr:my-3 md:grid-cols-[20%_80%] md:py-24`}>

    <nav className="top-24 flex items-center space-x-2 self-start md:sticky md:flex-col md:items-start md:space-x-0 md:space-y-2">
      <Link href="/">
        <Logo size={60} className="px-3" />
      </Link>

      <NavLink
        href="/"
        className={clsx(
          'hover:bg-slate-100',
          'dark:hover:bg-slate-900',
        )}
        activeClassname={clsx(
          'text-indigo-500',
          'bg-slate-100',
          'dark:bg-slate-900',
          'md:translate-x-3',
          'translate-x-0',
        )}
      >
        Home
      </NavLink>

      <NavLink
        href="/about"
        className={clsx(
          'hover:bg-slate-100',
          'dark:hover:bg-slate-900',
        )}
        activeClassname={clsx(
          'text-indigo-500',
          'bg-slate-100',
          'dark:bg-slate-900',
          'md:translate-x-3',
          'translate-x-0',
        )}
      >
        About
      </NavLink>

      <NavLink
        href="/work"
        className={clsx(
          'hover:bg-slate-100',
          'dark:hover:bg-slate-900',
        )}
        activeClassname={clsx(
          'text-indigo-500',
          'bg-slate-100',
          'dark:bg-slate-900',
          'md:translate-x-3',
          'translate-x-0',
        )}
      >
        Work
      </NavLink>

      <NavLink
        href="/blog"
        className={clsx(
          'hover:bg-slate-100',
          'dark:hover:bg-slate-900',
        )}
        activeClassname={clsx(
          'text-indigo-500',
          'bg-slate-100',
          'dark:bg-slate-900',
          'md:translate-x-3',
          'translate-x-0',
        )}
      >
        Blog
      </NavLink>

      <div className="hidden grid-cols-2 gap-4 p-3 !text-indigo-500 md:grid">
        <SocialLinks />
      </div>
    </nav>

    <div className="mb-10 flex grid-cols-2 items-center gap-4 p-3 !text-indigo-500 md:hidden">
      <SocialLinks />
    </div>

    <div className="p-3 pt-2 prose-a:font-bold prose-a:text-indigo-500 md:p-1">
      <Component {...pageProps} />
    </div>
  </main>

);

export default App;
