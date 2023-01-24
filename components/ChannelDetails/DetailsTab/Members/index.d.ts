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
declare const Members: ({ channel, chekActionPermission, publicChannelMembersTabName, privateChannelMembersTabName, showChangeMemberRole, showKickMember, showKickAndBlockMember }: IProps) => JSX.Element;
export default Members;
