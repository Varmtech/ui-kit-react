/// <reference types="react" />
import { IChannel } from '../../../../types';
interface IProps {
    channel: IChannel;
    chekActionPermission: (permission: string) => boolean;
    publicChannelMembersTabName?: string;
    privateChannelMembersTabName?: string;
    showChangeMemberRole?: boolean;
    showKickMember?: boolean;
    showKickAndBlockMember?: boolean;
}
declare const Members: ({ channel, chekActionPermission, showChangeMemberRole, showKickMember, showKickAndBlockMember }: IProps) => JSX.Element;
export default Members;
