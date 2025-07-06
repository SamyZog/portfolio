import { Path, StyleSheet, Svg } from "@react-pdf/renderer";

import { resumeTheme } from "@/constants/resume-theme";

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
});

export const ResumeLogo = () => {
  return (
    <Svg
      style={styles.logo}
      viewBox="0 0 512 512"
      fill={resumeTheme.background}
    >
      <Path d="M512 208H408V421H512V208Z" />
      <Path d="M104 43H0L1.86211e-05 256H104V43Z" />
      <Path d="M0 0L256 75.786V181.195L0 105.409V0Z" />
      <Path d="M0 165L256 240.786V346.195L0 270.409V165Z" />
      <Path d="M0 330L256 405.786V511.195L0 435.409V330Z" />
      <Path d="M256 511.195L512 435.409V330L256 405.786V511.195Z" />
      <Path d="M256 346.195L512 270.409V165L256 240.786V346.195Z" />
      <Path d="M256 181.195L512 105.409V0L256 75.786V181.195Z" />
    </Svg>
  );
};
