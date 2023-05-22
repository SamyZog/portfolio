import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Head from 'next/head';

const Blog = () => (
  <>
    <Head>
      <title>Samy Zogeyb | Blog</title>
    </Head>

    <section>
      <h1 className="flex justify-between">
        Coming Soon! 🚀
        <ThemeSwitcher />
      </h1>
    </section>
  </>
);

export default Blog;
