import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Fragment } from "react";

import { resumeTheme } from "@/constants/resume-theme";
import type { Locale } from "@/i18n/config";
import translations from "@/i18n/translations.json";

export const styles = StyleSheet.create({
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

export const ResumeExperience = ({ locale }: { locale: Locale }) => {
  const resumeText = translations[locale];

  return (
    <View style={{ gap: 10 }}>
      <Text
        style={{ fontSize: 12, fontWeight: "bold" }}
        id={resumeText.resume.section}
      >
        {resumeText.resume.section}
      </Text>

      {resumeText.resume.companies
        .slice(0, resumeText.resume.companies.length - 1)
        .map((entry) => {
          return (
            <View key={entry.company} style={{ fontSize: 10 }}>
              <Text style={{ fontWeight: "bold" }}>
                {entry.company} - {entry.role}
              </Text>
              <Text>
                {entry.period[0]} - {entry.period[1]}
              </Text>

              <View style={{ gap: 10 }}>
                {entry.projects.map((project, idx) => {
                  return (
                    <View
                      key={project.description}
                      style={{ marginTop: idx === 0 ? 6 : 0 }}
                    >
                      <View>
                        <View style={{ flexDirection: "row", gap: 8 }}>
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

                        <Text style={{ marginVertical: 8 }}>
                          {project.description}
                        </Text>

                        <View>
                          {project["summarized-achievements"].map(
                            (achievement) => {
                              return (
                                <Text key={achievement}>• {achievement}</Text>
                              );
                            },
                          )}
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
    </View>
  );
};
