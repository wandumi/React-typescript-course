import { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<'button'> & {
    href?: never;
}

type AnchorProps = ComponentPropsWithRef<'a'> & {
    href?: string;
}

const isAnchorProps = (props: ButtonProps | AnchorProps): props is AnchorProps => {
    return 'href' in props;
}

function Button(props: ButtonProps | AnchorProps) {

    if (isAnchorProps(props)) {
        return <a { ...props }></a>
    }

    return <button { ...props } className="p-2 bg-amber-300 rounded-sm text-black mt-2 w-full"></button>
}

export default Button