// @ts-check
import dotenv from "dotenv";

dotenv.config();

// const imageLoader = ({ src, width, quality }) => {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // loader: 'custom',
        // loaderFile: './app/image/image-loader.js',
        deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
        // deviceSizes: [320, 480, 640, 750],
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // images: {
    //     localPatterns: [
    //         {
    //             pathname: '/app/**',
    //             search: '',
    //         },
    //     ],
    // },
    // output: "export", // Check "out" folder
};

export default nextConfig;
