import type {JSX, ReactNode} from "react";

export interface LibraryPropsType {
    readonly children: ReactNode;
    readonly textContent: string;
}

export function LibraryComponent(props: LibraryPropsType): JSX.Element {
    const {children, textContent} = props;

    return (
        <div>
            <h3>{textContent}</h3>
            <div>{children}</div>
        </div>
    );
}
