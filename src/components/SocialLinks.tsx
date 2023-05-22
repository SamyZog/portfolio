import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTelegram,
} from 'react-icons/si';

const socialLinks = [
  {
    url: 'https://github.com/SamyZog',
    icon: SiGithub,
    title: 'Github',
  },
  {
    url: 'https://www.linkedin.com/in/samyzogeyb/',
    icon: SiLinkedin,
    title: 'Linkedin',
  },
  {
    url: 'https://t.me/SamZog',
    icon: SiTelegram,
    title: 'Telegram',
  },
  {
    url: 'mailto:samyzogeyb@gmail.com',
    icon: SiGmail,
    title: 'Gmail',
  },
];

export const SocialLinks = () => (
  <>
    {socialLinks.map((link) => (
      <a aria-label={link.title} className="duration-200 hover:text-indigo-500" key={link.url} href={link.url} target="_blank" rel="noreferrer">
        <link.icon fontSize={20} title={link.title} />
      </a>
    ))}
  </>
);
