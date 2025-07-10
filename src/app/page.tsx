import { getUserLocale } from "@/i18n/locale";
import translations from "@/i18n/translations.json";

const Home = async () => {
  const locale = await getUserLocale();

  const { h1, p1, p2, p3 } = translations[locale]["about-me"];

  return (
    <article>
      <h1 className="text-4xl font-bold">{h1}</h1>

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
