/// <reference types="react" />
interface IProps {
    backgroundColor?: string;
    titleColor?: string;
    infoTextColor?: string;
    infoIcon?: JSX.Element;
}
export default function ChatHeader({ infoIcon, backgroundColor, titleColor, infoTextColor }: IProps): JSX.Element;
export {};
