import facebookLogo from "../assets/images/icon-facebook.svg";
import twiterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";

// - Facebook: hsl(208, 92%, 53%)
// - Twitter: hsl(203, 89%, 53%)
// - Instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)
// - YouTube: hsl(348, 97%, 39%)

const serviceLogoMap = {
    facebook: {
        logo: facebookLogo,
        borderColor: "hsl(208, 92%, 53%)",
        order: 1,
    },
    twitter: {
        logo: twiterLogo,
        borderColor: "hsl(203, 89%, 53%)",
        order: 2,
    },
    instagram: {
        logo: instagramLogo,
        borderColor:
            "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        order: 3,
    },
    youtube: {
        logo: youtubeLogo,
        borderColor: "hsl(348, 97%, 39%)",
        order: 4,
    },
};

const servicesMeta = [
    {
        id: "fb",
        service: "facebook",
        user: "@nathanf",
        label: "followers",
        value: 1987,
        trendToday: 12,
    },
    {
        id: "tw",
        service: "twitter",
        user: "@nathanf",
        label: "followers",
        value: 1044,
        trendToday: 99,
    },
    {
        id: "insta",
        service: "instagram",
        user: "@therealnathanf",
        label: "followers",
        value: "11k",
        trendToday: 1099,
    },
    {
        id: "yt",
        service: "youtube",
        user: "Nathan F.",
        label: "subscribers",
        value: 8239,
        trendToday: -144,
    },
];

const metricsMeta = [
    {
        id: "A1",
        service: "facebook",
        label: "Page Views",
        value: 87,
        trend: 3,
        order: 1,
    },
    {
        id: "A2",
        service: "facebook",
        label: "Likes",
        value: 52,
        trend: -2,
        order: 2,
    },
    {
        id: "A3",
        service: "instagram",
        label: "Likes",
        value: 5462,
        trend: 2257,
        order: 3,
    },
    {
        id: "A4",
        service: "instagram",
        label: "Page Views",
        value: "52k",
        trend: 1375,
        order: 4,
    },
    {
        id: "A5",
        service: "twitter",
        label: "Retweets",
        value: 117,
        trend: 3,
        order: 5,
    },
    {
        id: "A6",
        service: "twitter",
        label: "Likes",
        value: 507,
        trend: 553,
        order: 6,
    },
    {
        id: "A7",
        service: "youtube",
        label: "Likes",
        value: 107,
        trend: -19,
        order: 7,
    },
    {
        id: "A8",
        service: "youtube",
        label: "Total Views",
        value: 1407,
        trend: -12,
        order: 8,
    },
];

export const servicesMetadata = servicesMeta.map((data) => {
    return {
        ...data,
        logo: serviceLogoMap[data.service].logo,
        borderColor: serviceLogoMap[data.service].borderColor,
    };
});
export const metricsMetadata = metricsMeta.map((data) => {
    return { ...data, logo: serviceLogoMap[data.service].logo };
});
