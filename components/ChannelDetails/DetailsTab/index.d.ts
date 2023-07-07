/// <reference types="react" />
import { IChannel } from '../../../types';
interface IProps {
    channel: IChannel;
    activeTab: string;
    theme: string;
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
}
declare const DetailsTab: ({ channel, theme, activeTab, checkActionPermission, setActiveTab, linkPreviewIcon, linkPreviewHoverIcon, linkPreviewTitleColor, linkPreviewColor, linkPreviewHoverBackgroundColor, voicePreviewPlayIcon, voicePreviewPlayHoverIcon, voicePreviewPauseIcon, voicePreviewPauseHoverIcon, voicePreviewTitleColor, voicePreviewDateAndTimeColor, voicePreviewHoverBackgroundColor, filePreviewIcon, filePreviewHoverIcon, filePreviewTitleColor, filePreviewSizeColor, filePreviewHoverBackgroundColor, filePreviewDownloadIcon, showChangeMemberRole, showKickMember, showKickAndBlockMember, showMakeMemberAdmin }: IProps) => JSX.Element;
export default DetailsTab;
