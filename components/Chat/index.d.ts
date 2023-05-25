/// <reference types="react" />
import { IChannel } from '../../types';
interface IProps {
    hideChannelList?: boolean;
    children?: JSX.Element | JSX.Element[];
    onActiveChannelUpdated?: (activeChannel: IChannel) => void;
}
export default function Chat({ children, hideChannelList, onActiveChannelUpdated }: IProps): JSX.Element;
export {};
