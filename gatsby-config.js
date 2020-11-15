
module.exports = {
    siteMetadata: {
        title: "Peak Websites",
        description: "Providing reliable, custom solutions in SEO and Local SEO, web development, web security and more.",
        author: "David Gaskin",
        image: "src/images/logo/Logo_squared.png",
        titleTemplate: "%s · Peak Websites",
        siteUrl: "https://peakwebsites.ca",
        twitterUsername: "@peakwebsite",
        twitterURL: "https://twitter.com/peakwebsite",
        facebookURL: "https://www.facebook.com/peakwebsiteservices/",
        hours: "Mo-Su",
        telephone: "+1-778-587-9220",
        paymentAccepted: "Cash, Credit Card, eTransfer",
        keywords: "SEO, Local SEO, Web Development, Web Design, Search Engine Optimization, Internet Marketing, Websites, Website Maintenance, Web Services, SEO Company, SEO Agency",
        contactEmail: "david@peakwebsites.ca",
        infoEmail: "sayhello@peakwebsites.ca"
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
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
                fonts: [{
                    family: `Montserrat`,
                    variants: [`300`,`300i`,`400`,`400i`,`700`]
                }],
            },
        }, {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_TRACKING_CODE,
                head: false,
            },
        }, {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: process.env.FB_PIXEL,
            },
        }, {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: process.env.GOOGLE_TAG_MANAGER,
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
  ],
}
