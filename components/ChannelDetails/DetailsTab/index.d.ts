/// <reference types="react" />
import { IChannel } from '../../../types';
interface IProps {
    channel: IChannel;
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
    checkActionPermission: (permission: string) => boolean;
    linkPreviewIcon?: JSX.Element;
    linkPreviewHoverIcon?: JSX.Element;
    linkPreviewTitleColor?: string;
    linkPreviewColor?: string;
    linkPreviewHoverBackgroundColor?: string;
    voicePreviewPlayIcon?: JSX.Element;
    voicePreviewPlayHoverIcon?: JSX.Element;
    voicePreviewPauseIcon?: JSX.Element;
    voicePreviewPauseHoverIcon?: JSX.Element;
    voicePreviewTitleColor?: string;
    voicePreviewDateAndTimeColor?: string;
    voicePreviewHoverBackgroundColor?: string;
    filePreviewIcon?: JSX.Element;
    filePreviewHoverIcon?: JSX.Element;
    filePreviewTitleColor?: string;
    filePreviewSizeColor?: string;
    filePreviewHoverBackgroundColor?: string;
    filePreviewDownloadIcon?: JSX.Element;
    showChangeMemberRole?: boolean;
    showKickMember?: boolean;
    showKickAndBlockMember?: boolean;
    showMakeMemberAdmin?: boolean;
    publicChannelDeleteMemberPopupDescription?: string;
    privateChannelDeleteMemberPopupDescription?: string;
    publicChannelRevokeAdminPopupTitle?: string;
    publicChannelRevokeAdminPopupDescription?: string;
    privateChannelRevokeAdminPopupTitle?: string;
    privateChannelRevokeAdminPopupDescription?: string;
    publicChannelMakeAdminPopupTitle?: string;
    publicChannelMakeAdminPopupDescription?: string;
    privateChannelMakeAdminPopupTitle?: string;
    privateChannelMakeAdminPopupDescription?: string;
}
declare const DetailsTab: ({ channel, activeTab, checkActionPermission, setActiveTab, linkPreviewIcon, linkPreviewHoverIcon, linkPreviewTitleColor, linkPreviewColor, linkPreviewHoverBackgroundColor, voicePreviewPlayIcon, voicePreviewPlayHoverIcon, voicePreviewPauseIcon, voicePreviewPauseHoverIcon, voicePreviewTitleColor, voicePreviewDateAndTimeColor, voicePreviewHoverBackgroundColor, filePreviewIcon, filePreviewHoverIcon, filePreviewTitleColor, filePreviewSizeColor, filePreviewHoverBackgroundColor, filePreviewDownloadIcon, showChangeMemberRole, showKickMember, showKickAndBlockMember, showMakeMemberAdmin, publicChannelDeleteMemberPopupDescription, privateChannelDeleteMemberPopupDescription, publicChannelRevokeAdminPopupDescription, privateChannelRevokeAdminPopupDescription, publicChannelMakeAdminPopupDescription, privateChannelMakeAdminPopupDescription }: IProps) => JSX.Element;
export default DetailsTab;
