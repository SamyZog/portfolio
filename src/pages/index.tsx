import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Samy Zogeyb</title>
    </Head>

    <section>
      <h1 className="flex justify-between">
        Samy Zogeyb 😎
        <ThemeSwitcher />
      </h1>

      <p>
        Hey 👋, my name is Samy!
      </p>

      <p>
        I am a
        {' '}
        <b>
          Software Engineer
        </b>
        {' '}
        at
        {' '}
        <a target="_blank" href="https://kotelov.com/en/" rel="noreferrer">KOTELOV</a>
        .
      </p>

      <p>
        Currently building UI&apos;s with
        {' '}
        <a target="_blank" href="https://reactjs.org/" rel="noreferrer">React</a>
        ,
        {' '}
        <a target="_blank" href="https://emotion.sh/docs/introduction/" rel="noreferrer">Emotion</a>
        ,
        {' '}
        <a target="_blank" href="https://nextjs.org/" rel="noreferrer">NextJS</a>
        {' '}
        and
        {' '}
        <a target="_blank" href="https://socket.io/" rel="noreferrer">Socket.IO</a>
        .
      </p>

      <p>
        Author of
        {' '}
        <a target="_blank" href="https://toastice-docs.vercel.app/" rel="noreferrer">
          Toastice 🍞
        </a>
        .
      </p>

      <p>
        I am a passionate and dedicated
        {' '}
        <b>
          Front-End Developer
        </b>
        {' '}
        with a keen eye for creating visually stunning and user-friendly websites.
      </p>

      <p>
        Whether it&apos;s optimizing performance, solving complex UI challenges,
        or implementing cutting-edge features, I am always up for the next exciting project.
        So get in touch! 🤙
      </p>
    </section>
  </>

);

export default Home;
