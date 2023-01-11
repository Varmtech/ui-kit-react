/// <reference types="react" />
import { IChannel } from '../../../../types';
interface IProps {
    channel: IChannel;
    chekActionPermission: (permission: string) => boolean;
}
declare const Members: ({ channel, chekActionPermission }: IProps) => JSX.Element;
export default Members;
