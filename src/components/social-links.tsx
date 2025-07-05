import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";

export const SocialLinks = () => {
  return (
    <>
      <a title="Github" href="https://github.com/SamyZog" target="_blank">
        <IconBrandGithub />
      </a>

      <a
        title="LinkedIn"
        href="https://www.linkedin.com/in/samyzogeyb"
        target="_blank"
      >
        <IconBrandLinkedin />
      </a>

      <a title="Telegram" href="https://t.me/SamZog" target="_blank">
        <IconBrandTelegram />
      </a>

      <a title="Gmail" href="mailto:samyzogeyb@gmail.com" target="_blank">
        <IconBrandGmail />
      </a>
    </>
  );
};
