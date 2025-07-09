import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import path from "path";
import { Fragment } from "react";

import { resumeTheme } from "@/constants/resume-theme";
import resume from "@/i18n/resume.json";
import translations from "@/i18n/translations.json";
import type { WithLocale } from "@/types/helpers";

import { ResumeLogo } from "./resume-logo";
import { ResumeSocial } from "./resume-social";

const normalFont =
  typeof window !== "undefined"
    ? "/fonts/RobotoCondensed-Regular.ttf"
    : path.join(process.cwd(), "public/fonts/RobotoCondensed-Regular.ttf");

const boldFont =
  typeof window !== "undefined"
    ? "/fonts/RobotoCondensed-Bold.ttf"
    : path.join(process.cwd(), "public/fonts/RobotoCondensed-Bold.ttf");

Font.register({
  family: "Roboto Condensed",
  fonts: [
    {
      fontWeight: "normal",
      src: normalFont,
    },
    {
      fontWeight: "bold",
      src: boldFont,
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: resumeTheme.background,
    fontFamily: "Roboto Condensed",
    fontSize: 10,
    color: resumeTheme.foreground,
    padding: 16,
  },
  divider: {
    borderBottomColor: resumeTheme.foreground,
    borderBottomWidth: 1,
  },
  links: {
    textDecoration: "underline",
    color: resumeTheme.foreground,
    fontWeight: "bold",
  },
});

export const Resume = ({ locale }: WithLocale) => {
  const text = resume[locale];
  const resumeText = translations[locale];

  return (
    <Document
      keywords={text.keywords.join(" ")}
      author={text.name}
      creationDate={new Date()}
      subject={text.subject}
      title={text.subject}
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={{ gap: 10 }}>
          <View
            style={{
              backgroundColor: resumeTheme.foreground,
              padding: 10,
              flexDirection: "row",
              gap: 10,
              fontSize: 16,
              alignItems: "center",
            }}
          >
            <ResumeLogo />

            <Text style={{ color: resumeTheme.background, fontWeight: "bold" }}>
              {text.name} - {text.position}
            </Text>
          </View>

          <View
            wrap
            style={{
              gap: 10,
              fontSize: 10,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: resumeTheme.background,
            }}
          >
            <ResumeSocial />
          </View>

          <View style={{ flexDirection: "column", gap: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              {resumeText["about-me"].section}
            </Text>

            <Text style={{ fontSize: 11 }}>{resumeText["about-me"].p1}</Text>
          </View>

          <View style={styles.divider} />

          <View style={{ fontSize: 11 }}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              {resumeText.resume.section}
            </Text>

            {resumeText.resume.companies.map((entry) => {
              return (
                <Fragment key={entry.company}>
                  <Text
                    style={{ fontWeight: "bold", marginTop: 15, fontSize: 15 }}
                  >
                    {entry.company} - {entry.role} | {entry.period[0]} -{" "}
                    {entry.period[1] || "Present"}
                  </Text>

                  {entry.projects.map((project) => {
                    return (
                      <View key={project.description} wrap={false}>
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: 5,
                            gap: 5,
                          }}
                        >
                          {project.meta.map((meta) => {
                            return (
                              <Fragment key={meta.name}>
                                {meta.website.href ? (
                                  <Link
                                    style={styles.links}
                                    href={meta.website.href}
                                  >
                                    {meta.name}
                                  </Link>
                                ) : (
                                  <Text>{meta.name}</Text>
                                )}
                              </Fragment>
                            );
                          })}
                        </View>

                        <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                          {project.period[0]} - {project.period[1]}
                        </Text>

                        <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                          {project.description}
                        </Text>

                        {project["summarized-achievements"].map(
                          (achievement, idx, arr) => {
                            const isFirst = idx === 0;
                            const isLast = idx === arr.length - 1;

                            return (
                              <Text
                                style={{
                                  marginTop: isFirst ? 5 : 1,
                                  marginBottom: isLast ? 10 : 0,
                                }}
                                key={achievement}
                              >
                                • {achievement}
                              </Text>
                            );
                          },
                        )}
                      </View>
                    );
                  })}
                </Fragment>
              );
            })}
          </View>

          {/* <View style={styles.divider} />

          <View style={{ flexDirection: "row", fontSize: 5 }}>
            <Text>{text.keywords.join(", ")}</Text>
          </View> */}
        </View>
      </Page>
    </Document>
  );
};
