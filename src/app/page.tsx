import { getTranslations } from "@/i18n/locale";

const Home = async () => {
  const { translations } = await getTranslations();

  const { h1, p1, p2, p3 } = translations["about-me"];

  return (
    <article>
      <h1 className="text-2xl">{h1}</h1>

      <br />

      <p>{p1}</p>

      <br />

      <p>{p2}</p>

      <br />

      <p>{p3}</p>
    </article>
  );
};

export default Home;
