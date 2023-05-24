/// <reference types="react" />
interface IProps {
    backgroundColor?: string;
    titleColor?: string;
    memberInfoTextColor?: string;
    showMemberInfo?: boolean;
    infoIcon?: JSX.Element;
}
export default function ChatHeader({ infoIcon, backgroundColor, titleColor, memberInfoTextColor, showMemberInfo }: IProps): JSX.Element;
export {};
