
module.exports = {
  siteMetadata: {
    title: "Peak Websites",
    description: "Providing reliable, custom solutions in web marketing and consultations, web design & development, SEO, web maintenance and more.",
    author: "David Gaskin",
    image: "src/images/logo/Logo_squared.png",
    titleTemplate: "%s · Peak Websites",
    url: "https://peakwebsites.ca",
    twitterUsername: "@peakwebsite",
    twitterLink: "https://twitter.com/peakwebsite",
    facebookUrl: "https://www.facebook.com/peakwebsiteservices/"
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
        name: "Peak Websites",
        short_name: "Peak Websites",
        start_url: "/",
        background_color: "#27688E",
        theme_color: "#27688E",
        display: "minimal-ui",
        icon: "src/images/logo/Logo_squared.png",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cms.peakwebsites.ca`,
        protocol: `https`,
        useACF: false,
        verboseOutput: false,
        hostingWPCOM: false
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`,`300i`,`400`,`400i`,`700`]
          },
        ],
      },
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_CODE,
        head: false,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
