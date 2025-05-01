type ImageLoaderArgumentType = {
    src: string;
    quality?: number;
    width: number;
};

export default function myImageLoader(data: ImageLoaderArgumentType): string {
    const {src, width, quality} = data;

    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
