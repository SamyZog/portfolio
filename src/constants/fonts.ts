import localFont from "next/font/local";

export const font = localFont({
  display: "block",
  preload: true,
  variable: "--font-inter",
  src: [
    {
      path: "../../public/fonts/Inter_28pt-Bold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Inter_28pt-Regular.ttf",
      weight: "400",
    },
  ],
});
