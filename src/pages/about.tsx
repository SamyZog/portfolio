/* eslint-disable max-len */
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Head from 'next/head';

const About = () => (
  <>
    <Head>
      <title>Samy Zogeyb | About</title>
      <meta name="description" content="Experienced Front-End Engineer" />
    </Head>

    <section>
      <h1 className="flex justify-between">
        About Me 😏
        <ThemeSwitcher />
      </h1>

      <p>
        Hi there! I&apos;m Samy, an experienced
        {' '}
        <b>
          Front-End Developer
        </b>
        ,
        {' '}
        passionate about crafting immersive web experiences.
      </p>

      <p>
        With a solid foundation in HTML, CSS, and JavaScript, I have honed my skills in building responsive websites that provide exceptional user experiences.
      </p>

      <p>
        I am well-versed in optimizing performance and load times, employing techniques like code minification and caching to deliver exceptional speed.
      </p>

      <p>
        Collaboration is key to my approach, as I enjoy working closely with designers, back-end developers, and stakeholders to bring projects to life.
      </p>

      <p>
        I take pride in writing clean and maintainable code, following industry standards and conventions. I am a problem-solver at heart and enjoy tackling complex challenges to deliver elegant solutions. I am a firm believer in continuous learning and thrive in a collaborative environment where ideas are shared and innovation is encouraged.
      </p>

      <p>
        As an avid learner, I constantly seek new challenges to expand my skill set and explore innovative solutions. I&apos;m excited to leverage my expertise and creativity to build extraordinary digital experiences that leave a lasting impression. Let&apos;s collaborate and make the web a more captivating place together!
      </p>
    </section>
  </>

);

export default About;
