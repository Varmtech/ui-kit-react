/// <reference types="react" />
import { IAttachment } from '../../types';
interface AttachmentPops {
    attachment: IAttachment;
    isPrevious?: boolean;
    isRepliedMessage?: boolean;
    isDetailsView?: boolean;
    removeSelected?: (attachmentUrl: string) => void;
    setVideoIsReadyToSend?: (attachmentId: string) => void;
    handleMediaItemClick?: (attachment: IAttachment) => void;
    borderRadius?: string;
    backgroundColor: string;
    selectedFileAttachmentsBoxBorder?: string;
    selectedFileAttachmentsTitleColor?: string;
    selectedFileAttachmentsSizeColor?: string;
    selectedFileAttachmentsIcon?: JSX.Element;
    fileNameMaxLength?: number;
    imageMinWidth?: string;
    closeMessageActions?: (state: boolean) => void;
    fileAttachmentWidth?: number;
    imageAttachmentMaxWidth?: number;
    imageAttachmentMaxHeight?: number;
    videoAttachmentMaxWidth?: number;
    videoAttachmentMaxHeight?: number;
}
declare const Attachment: ({ attachment, isPrevious, removeSelected, isRepliedMessage, borderRadius, handleMediaItemClick, setVideoIsReadyToSend, selectedFileAttachmentsIcon, backgroundColor, selectedFileAttachmentsBoxBorder, selectedFileAttachmentsTitleColor, selectedFileAttachmentsSizeColor, isDetailsView, imageMinWidth, closeMessageActions, fileAttachmentWidth, imageAttachmentMaxWidth, imageAttachmentMaxHeight, videoAttachmentMaxWidth, videoAttachmentMaxHeight }: AttachmentPops) => JSX.Element;
export default Attachment;
export declare const AttachmentFile: import("styled-components").StyledComponent<"div", any, {
    isPrevious?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
    isUploading?: boolean | undefined;
    borderRadius?: string | undefined;
    background?: string | undefined;
    border?: string | undefined;
    width?: number | undefined;
}, never>;
export declare const AttachmentImg: import("styled-components").StyledComponent<"img", any, {
    absolute?: boolean | undefined;
    borderRadius?: string | undefined;
    ref?: any;
    withBorder?: boolean | undefined;
    isPrevious?: boolean | undefined;
    hidden?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
    fitTheContainer?: boolean | undefined;
    backgroundColor: string;
    imageMinWidth?: string | undefined;
    imageMaxHeight?: string | undefined;
}, never>;
