import type {JSX, ReactNode} from "react";

type PropsType = Readonly<{
    children: ReactNode;
    params: Promise<{id: string}>;
}>;

export function generateStaticParams(): Array<{id: string}> {
    return [{id: "1"}, {id: "2"}, {id: "3"}];
}

export default async function Article(props: PropsType): Promise<JSX.Element> {
    const {id} = await props.params;

    return (
        <>
            <h1>article: {id}</h1>
            <div>{props.children}</div>
        </>
    );
}
