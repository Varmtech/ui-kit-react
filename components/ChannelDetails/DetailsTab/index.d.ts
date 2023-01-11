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
    filePreviewIcon?: JSX.Element;
    filePreviewHoverIcon?: JSX.Element;
    filePreviewTitleColor?: string;
    filePreviewSizeColor?: string;
    filePreviewHoverBackgroundColor?: string;
    filePreviewDownloadIcon?: JSX.Element;
}
declare const DetailsTab: ({ channel, activeTab, checkActionPermission, setActiveTab, linkPreviewIcon, linkPreviewHoverIcon, linkPreviewTitleColor, linkPreviewColor, linkPreviewHoverBackgroundColor, filePreviewIcon, filePreviewHoverIcon, filePreviewTitleColor, filePreviewSizeColor, filePreviewHoverBackgroundColor, filePreviewDownloadIcon }: IProps) => JSX.Element;
export default DetailsTab;
