import client from "api/client";
import About from "components/layout/About";
import Contact from "components/layout/Contact";
import Hero from "components/layout/Hero";
import Portfolio from "components/layout/Portfolio";
import { socialData } from "constants/index.mjs";
import { motion } from "framer-motion";
import { gql } from "graphql-request";
import useScrollTrigger from "hooks/useScrollTrigger";
import Head from "next/head";
import { RiArrowUpSLine } from "react-icons/ri";

const HomePageQuery = gql`
  query HomePageQuery($where: PageWhereUniqueInput!) {
    page(where: $where) {
      topLevelAlert {
        id
        content
      }
      navLinks {
        id
        label
        href
        target
      }
      socialLinks {
        id
        platform
        url
      }
      signature
      blocks {
        longText {
          markdown          
        }
        slug
        technologies
        projects {
          id
          title
          demoUrl
          sourceUrl
          description
          tech
          images {
            width
            height
            id
            url(transformation: {document: {output: {format: webp}}})
          }
        }
        actions {
          ... on Button {
            id
            label
            endIcon
            href
            internal
            download
            target
            startIcon
          }
          ... on Link {
            id
            label
            href
            internal
            download
            target
          }
        }
      }
    }
  }
`;

const animations = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 1.2,
    },
  },
};

const Home = ({
  blocks,
  socialLinks,
  signature,
}) => {
  const trigger = useScrollTrigger({ threshold: 500 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Samy Zogeyb | Front-End Web Developer</title>
        <meta property="og:title" content="Samy Zogeyb | Front-End Web Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.samzog.dev" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:description" content="Samy Zogeyb's Front-End Web Developer Portfolio" />
        <link rel="canonical" href="https://www.samzog.dev" />
        <meta name="description" content="Samy Zogeyb's Front-End Web Developer Portfolio" />
      </Head>
      <motion.main
        variants={animations}
        initial="initial"
        animate="animate"
      >
        <Hero
          variants={animations}
          id={blocks.hero.slug}
          content={blocks.hero.longText[0].markdown}
        />
        <About
          variants={animations}
          id={blocks.about.slug}
          content={blocks.about.longText[0].markdown}
          items={blocks.about.technologies}
        />
        <Portfolio
          variants={animations}
          id={blocks.portfolio.slug}
          projects={blocks.portfolio.projects}
        />
        <Contact
          variants={animations}
          id={blocks.contact.slug}
          content={blocks.contact.longText[0].markdown}
          actions={blocks.contact.actions}
        />
      </motion.main>
      <motion.footer variants={animations} className="py-5 w-screen">
        <ul className="flex justify-center items-center p-0 space-x-5">
          {socialLinks.map((link) => {
            const Icon = socialData[link.platform];

            return (
              <a
                className="no-underline text-slate-500 dark:text-slate-400 font-semibold"
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={25} />
              </a>
            );
          })}
        </ul>
        <p className="w-full text-center text-sky-500 font-medium m-0 mt-5">
          {signature}
        </p>
      </motion.footer>
      <motion.button
        onClick={scrollToTop}
        custom={trigger}
        initial={{ scale: 0 }}
        animate={(custom) => ({ scale: custom ? 1 : 0 })}
        className="fixed bottom-4 right-4 p-2 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 rounded-full"
      >
        <RiArrowUpSLine />
      </motion.button>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const data = await client.request(HomePageQuery, {
      where: {
        slug: "home",
      },
    });

    const blocks = data.page.blocks.reduce((sections, section) => {
      // eslint-disable-next-line no-param-reassign
      sections[section.slug] = section;

      return sections;
    }, {});

    return {
      props: {
        blocks,
        topLevelAlert: data.page.topLevelAlert,
        socialLinks: data.page.socialLinks,
        signature: data.page.signature,
        navLinks: data.page.navLinks,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
