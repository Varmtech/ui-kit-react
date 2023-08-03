import React from 'react';
import { IAttachment } from '../../types';
interface IVideoPreviewProps {
    maxWidth?: string;
    maxHeight?: string;
    theme?: string;
    file: IAttachment;
    borderRadius?: string;
    isPreview?: boolean;
    isCachedFile?: boolean;
    isRepliedMessage?: boolean;
    backgroundColor: string;
    src: string;
    uploading?: boolean;
    isDetailsView?: boolean;
    setVideoIsReadyToSend?: (attachmentId: string) => void;
}
declare const VideoPreview: React.NamedExoticComponent<IVideoPreviewProps>;
export default VideoPreview;
export declare const AttachmentFile: import("styled-components").StyledComponent<"div", any, {
    isPrevious?: boolean | undefined;
    borderRadius?: string | undefined;
    background?: string | undefined;
    border?: string | undefined;
}, never>;
export declare const AttachmentImg: import("styled-components").StyledComponent<"img", any, {
    borderRadius?: string | undefined;
}, never>;
