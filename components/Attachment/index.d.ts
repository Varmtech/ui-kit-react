/// <reference types="react" />
import { IAttachment } from '../../types';
interface AttachmentPops {
    attachment: IAttachment;
    isPreview?: boolean;
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
declare const Attachment: ({ attachment, isPreview, removeSelected, isRepliedMessage, borderRadius, handleMediaItemClick, setVideoIsReadyToSend, selectedFileAttachmentsIcon, backgroundColor, selectedFileAttachmentsBoxBorder, selectedFileAttachmentsTitleColor, selectedFileAttachmentsSizeColor, isDetailsView, imageMinWidth, closeMessageActions, fileAttachmentWidth, imageAttachmentMaxWidth, imageAttachmentMaxHeight, videoAttachmentMaxWidth, videoAttachmentMaxHeight }: AttachmentPops) => JSX.Element;
export default Attachment;
export declare const AttachmentFile: import("styled-components").StyledComponent<"div", any, {
    isPreview?: boolean | undefined;
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
    isPreview?: boolean | undefined;
    hidden?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
    fitTheContainer?: boolean | undefined;
    backgroundColor: string;
    imageMinWidth?: string | undefined;
    imageMaxHeight?: string | undefined;
}, never>;
