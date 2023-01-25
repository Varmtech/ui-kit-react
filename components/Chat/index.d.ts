/// <reference types="react" />
interface IProps {
    publicChannelMemberDisplayTitle?: string;
    privateChannelMemberDisplayTitle?: string;
    children?: JSX.Element | JSX.Element[];
}
export default function Chat({ children }: IProps): JSX.Element;
export {};
