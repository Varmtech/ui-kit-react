/// <reference types="react" />
interface IProps {
    hideChannelList?: boolean;
    children?: JSX.Element | JSX.Element[];
}
export default function Chat({ children, hideChannelList }: IProps): JSX.Element;
export {};
