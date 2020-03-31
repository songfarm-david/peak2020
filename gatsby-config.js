module.exports = {
  siteMetadata: {
    title: `Peak Websites`,
    description: ``,
    author: `David Gaskin`,
    menuLinks: [
      {
        name: 'about',
        link: `/about`
      },
      {
        name: `services`,
        link: `/services`,
        subItems: [
          {
            name: `consulting`,
            link: `/services/web-consulting`
          },
          {
            name: `web design/development`,
            link: `/services/website-development-design-services`
          },
          {
            name: `website maintenance`,
            link: `/services/website-maintenance-service`
          },
          {
            name: `search engine optimization`,
            link: `/services/seo-services`
          }
        ]
      },
      {
        name: `blog`,
        link: `/`
      },
      {
        name: `contact`,
        link: `/contact-us`
      }
    ],
    footerLinks: [
      {
        name: `Write for us!`,
        link: `contribute-to-the-blog`
      }
    ],
    legalLinks: [
      {
        name: `disclaimer`,
        link: `disclaimer`
      },
      {
        name: `privacy policy`,
        link: `privacy-policy`
      },
      {
        name: `sitemap`,
        link: `sitemap`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `peakwebsites.ca`,
        protocol: `https`,
        useACF: false,
        verboseOutput: false,
        hostingWPCOM: false
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
