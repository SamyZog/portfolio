import { IconExternalLink } from "@tabler/icons-react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Fragment } from "react";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Separator } from "@/components/separator";
import { Skeleton } from "@/components/skeleton";
import { paths } from "@/constants/paths";
import { getTranslations, getUserLocale } from "@/i18n/locale";
import seo from "@/i18n/seo.json";
import { cn } from "@/utils/cn";

const DownloadPDF = dynamic(
  () => import("@/components/download-pdf").then((mod) => mod.DownloadPDF),
  {
    ssr: !!false,
    loading: () => <Skeleton className="h-7 w-32" />,
  },
);

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
    <article className="flex-1 ml-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{h1.title}</h1>

        <div className="flex gap-2">
          <DownloadPDF locale={locale}>{h1.action}</DownloadPDF>

          <Button asChild>
            <Link
              href={`${paths["resume-preview"]}?lang=${locale}`}
              target="_blank"
            >
              {h1.preview}
            </Link>
          </Button>
        </div>
      </div>

      <br />

      <div className="[&_a]:underline">
        {companies.map(
          ({ company, location, period, role, website, projects }, idx) => {
            const isFirst = idx === 0;

            return (
              <Fragment key={company}>
                <h2
                  id={company}
                  className={cn(
                    "text-xl flex items-center gap-2 font-bold",
                    !isFirst && "mt-10",
                  )}
                >
                  {role}
                  {company && !website && <div>{company}</div>}
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <i>({location})</i>
                  </div>
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
                                {name}
                                {website.href && (
                                  <>
                                    <div>-</div>
                                    <i>
                                      <a
                                        href={website.href}
                                        target="_blank"
                                        className="flex items-center gap-1 w-fit"
                                      >
                                        {website.label}

                                        <IconExternalLink className="size-4" />
                                      </a>
                                    </i>
                                  </>
                                )}
                              </h3>
                            );
                          })}

                          <p className="mt-1">{rest["company-background"]}</p>

                          <ul className="flex gap-1 items-center flex-wrap my-5">
                            {rest["tech-stack"].map((tech) => {
                              return (
                                <li key={tech}>
                                  <Badge>{tech}</Badge>
                                </li>
                              );
                            })}
                          </ul>

                          <p>
                            <i>{description}</i>
                          </p>

                          <br />

                          <ol>
                            {achievements.map((achievement) => {
                              return (
                                <li className="list-disc" key={achievement}>
                                  {achievement}
                                </li>
                              );
                            })}
                          </ol>
                        </li>
                      );
                    },
                  )}
                </ol>
              </Fragment>
            );
          },
        )}
      </div>
    </article>
  );
};

export default Page;
