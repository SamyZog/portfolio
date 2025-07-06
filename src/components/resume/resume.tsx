import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import path from "path";

import { resumeTheme } from "@/constants/resume-theme";
import type { Locale } from "@/i18n/config";
import resume from "@/i18n/resume.json";
import translations from "@/i18n/translations.json";

import { ResumeExperience } from "./resume-experience";
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
  },
  mainSection: {
    width: "100%",
    gap: 12,
    color: resumeTheme.foreground,
  },
  divider: {
    borderBottomColor: resumeTheme.foreground,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  aboutMe: {
    fontSize: 12,
  },
});

export const Resume = ({ locale }: { locale: Locale }) => {
  const text = resume[locale];
  const resumeText = translations[locale];

  return (
    <Document
      keywords={text.keywords.join(",")}
      author={text.name}
      creationDate={new Date()}
      subject={text.subject}
      title={text.subject}
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.mainSection}>
          <View
            style={{
              backgroundColor: resumeTheme.foreground,
              color: resumeTheme.background,
              padding: 16,
              paddingBottom: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <ResumeLogo />

              <Text style={styles.title}>
                {text.name} - {text.position}
              </Text>
            </View>

            <View
              wrap
              style={{
                fontSize: 9,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <ResumeSocial />
            </View>
          </View>

          <View style={{ padding: 16, paddingTop: 0 }}>
            <View style={{ paddingBottom: 10 }}>
              <Text style={styles.aboutMe}>{resumeText["about-me"].p1}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 1 }}>
              {text.keywords.map((word) => {
                return (
                  <Text
                    style={{ fontSize: 1, color: resumeTheme.background }}
                    key={word}
                  >
                    {word}
                  </Text>
                );
              })}
            </View>
            <ResumeExperience locale={locale} />
          </View>
        </View>
      </Page>
    </Document>
  );
};
