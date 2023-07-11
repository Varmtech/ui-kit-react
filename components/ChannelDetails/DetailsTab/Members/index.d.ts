/// <reference types="react" />
import { IChannel } from '../../../../types';
interface IProps {
    channel: IChannel;
    theme: string;
    checkActionPermission: (permission: string) => boolean;
    showChangeMemberRole?: boolean;
    showMakeMemberAdmin?: boolean;
    showKickMember?: boolean;
    showKickAndBlockMember?: boolean;
}
declare const Members: ({ channel, theme, checkActionPermission, showChangeMemberRole, showMakeMemberAdmin, showKickMember, showKickAndBlockMember }: IProps) => JSX.Element;
export default Members;
