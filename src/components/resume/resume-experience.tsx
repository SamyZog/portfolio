import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { Fragment } from "react";

import type { Locale } from "@/i18n/config";
import translations from "@/i18n/translations.json";

const darkColor = "#0b0809";

export const styles = StyleSheet.create({
  divider: {
    borderBottomColor: darkColor,
    borderBottomWidth: 1,
  },
});

export const ResumeExperience = ({ locale }: { locale: Locale }) => {
  const resumeText = translations[locale];

  return (
    <View style={{ gap: 10 }}>
      {resumeText.resume.companies
        .slice(0, resumeText.resume.companies.length - 1)
        .map((entry) => {
          return (
            <View key={entry.company} style={{ fontSize: 11 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  {entry.company} - {entry.role}
                </Text>
                <Text>
                  {entry.period[0]} - {entry.period[1]}
                </Text>
              </View>

              <View style={styles.divider} />

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
                                <Text style={{ fontWeight: "bold" }}>
                                  {meta.name}
                                </Text>
                              </Fragment>
                            );
                          })}
                        </View>

                        <Text style={{ marginBottom: 8 }}>
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
