import facebookLogo from "../assets/images/icon-facebook.svg"
import twiterLogo from "../assets/images/icon-twitter.svg"
import instagramLogo from "../assets/images/icon-instagram.svg"
import youtubeLogo from "../assets/images/icon-youtube.svg"

// - Facebook: hsl(208, 92%, 53%)
// - Twitter: hsl(203, 89%, 53%)
// - Instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)
// - YouTube: hsl(348, 97%, 39%)

const serviceLogoMap = {
    facebook:{
        logo:facebookLogo,
        borderColor: "hsl(208, 92%, 53%)"
    },
    twitter:{
        logo:twiterLogo,
        borderColor: "hsl(203, 89%, 53%)"
    },
    instagram:{
        logo:instagramLogo,
        borderColor: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
    },
    youtube:{
        logo:youtubeLogo,
        borderColor: "hsl(348, 97%, 39%)"
    },
}

const servicesMeta = [
    {
        service:"facebook",
        user:"@nathanf",
        label:"followers",
        value:1987,
        trendToday:12,
    },
    {
        service:"twitter",
        user:"@nathanf",
        label:"followers",
        value:1044,
        trendToday:99,
    },
    {
        service:"instagram",
        user:"@therealnathanf",
        label:"followers",
        value:"11k",
        trendToday:1099,
    },
    {
        service:"youtube",
        user:"Nathan F.",
        label:"subscribers",
        value:8239,
        trendToday:-144,
    }
]

const metricsMeta = [
    {
        service:"facebook",
        label:"Page Views",
        value:87,
        trend:3,
    },
    {
        service:"facebook",
        label:"Likes",
        value:52,
        trend:-2,
    },
    {
        service:"instagram",
        label:"Likes",
        value:5462,
        trend:2257,
    },
    {
        service:"instagram",
        label:"Page Views",
        value:"52k",
        trend:1375,
    },
    {
        service:"twitter",
        label:"Retweets",
        value:117,
        trend:3,
    },
    {
        service:"twitter",
        label:"Likes",
        value:507,
        trend:553,
    },
    {
        service:"youtube",
        label:"Likes",
        value:107,
        trend:-19,
    },
    {
        service:"youtube",
        label:"Total Views",
        value:1407,
        trend:-12,
    }
]

export const servicesMetadata = servicesMeta.map(data=>{return {...data, logo:serviceLogoMap[data.service].logo, borderColor:serviceLogoMap[data.service].borderColor}})
export const metricsMetadata = metricsMeta.map(data=>{return {...data, logo:serviceLogoMap[data.service].logo}})