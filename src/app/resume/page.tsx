import { IconExternalLink, IconEye } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { DownloadPDF } from "@/components/download-pdf";
import { Separator } from "@/components/separator";
import { paths } from "@/constants/paths";
import { getTranslations, getUserLocale } from "@/i18n/locale";
import seo from "@/i18n/seo.json";
import { cn } from "@/utils/cn";

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getUserLocale();

  const data = seo[locale].resume;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "ru_RU",
      emails: "samyzogeyb@gmail.com",
      description: data.ogDescription,
      title: data.ogTitle,
      images: [
        {
          alt: "Samy Zogeyb Logo",
          url: "/open_graph.png",
          height: "630",
          width: "1200",
        },
      ],
    },
  };
};

const Page = async () => {
  const { translations, locale } = await getTranslations();

  const { companies, h1 } = translations.resume;

  return (
    <article className="flex-1">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl">{h1.title}</h1>

        <div className="flex gap-2 flex-wrap justify-end">
          <DownloadPDF locale={locale}>{h1.action}</DownloadPDF>

          <Button asChild>
            <Link href={`${paths["resume-preview"]}/${locale}`} target="_blank">
              {h1.preview}

              <IconEye />
            </Link>
          </Button>
        </div>
      </div>

      <br />

      <ol className="[&_a]:underline">
        {companies.map(
          ({ company, location, period, role, website, projects }, idx) => {
            const isFirst = idx === 0;

            return (
              <li key={company}>
                <h2
                  id={company}
                  className={cn(
                    "text-xl flex items-center gap-2 font-bold",
                    !isFirst && "mt-10",
                  )}
                >
                  {role} {company && !website && company}
                  {company && website && (
                    <a
                      href={website}
                      target="_blank"
                      className="flex items-center gap-1 w-fit"
                    >
                      {company}

                      <IconExternalLink className="size-4" />
                    </a>
                  )}
                </h2>

                <div className="flex items-center justify-between text-muted-foreground">
                  <p>
                    <i>({location})</i>
                  </p>
                  <div className="flex items-center gap-1">
                    <p>{period[0]}</p> <div>-</div> <p>{period[1]}</p>
                  </div>
                </div>

                <Separator />

                <br />

                <ol className="grid gap-10">
                  {projects?.map(
                    ({ achievements, description, meta, ...rest }) => {
                      return (
                        <li key={description}>
                          {meta?.map(({ name, website }) => {
                            if (!name || !website) return null;

                            return (
                              <h3
                                key={name}
                                className="flex items-center gap-2 font-bold"
                              >
                                {website.href ? (
                                  <a
                                    href={website.href}
                                    target="_blank"
                                    className="flex items-baseline gap-1 w-fit"
                                  >
                                    {name}

                                    <IconExternalLink className="size-4" />
                                  </a>
                                ) : (
                                  name
                                )}
                              </h3>
                            );
                          })}

                          <i className="mt-1 text-muted-foreground">
                            {rest["company-background"]}
                          </i>

                          <ul className="flex gap-1 items-center flex-wrap my-5">
                            {rest["tech-stack"].map((tech) => {
                              return (
                                <Badge
                                  asChild
                                  key={tech}
                                  className="text-muted-foreground border-2"
                                >
                                  <li>{tech}</li>
                                </Badge>
                              );
                            })}
                          </ul>

                          <p className="ml-5">{description}</p>

                          <br />

                          <ul>
                            {achievements.map((achievement) => {
                              return (
                                <li
                                  className="list-disc ml-5"
                                  key={achievement}
                                >
                                  {achievement}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    },
                  )}
                </ol>
              </li>
            );
          },
        )}
      </ol>
    </article>
  );
};

export default Page;
