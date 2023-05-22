/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.samzog.dev',
  generateRobotsTxt: true,
  priority: 1,
};
