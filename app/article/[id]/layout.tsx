import type {ReactNode, JSX} from "react";

type PropsType = Readonly<{
    children: ReactNode,
    params: { id: string }
}>;

export function generateStaticParams() {
    return [{id: '1'}, {id: '2'}, {id: '3'}]
}

export default function Article(props: PropsType): JSX.Element {
    return (
        <>
            <h1>article: {props.params.id}</h1>
            <div>{props.children}</div>
        </>
    );
}