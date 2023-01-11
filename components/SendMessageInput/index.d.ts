import React, { FC } from 'react';
import { IUser } from '../../types';
interface SendMessageProps {
    draggedAttachments?: boolean;
    handleAttachmentSelected?: (state: boolean) => void;
    hideEmojis?: boolean;
    emojiIcoOrder?: number;
    attachmentIcoOrder?: number;
    sendIconOrder?: number;
    iconsHoverColor?: string;
    inputOrder?: number;
    CustomTypingIndicator?: FC<{
        from: IUser;
        typingState: boolean;
    }>;
    margin?: string;
    border?: string;
    borderRadius?: string;
    selectedFileAttachmentsBoxWidth?: string;
    selectedFileAttachmentsBoxBackground?: string;
    selectedFileAttachmentsBoxBorder?: string;
    selectedFileAttachmentsTitleColor?: string;
    selectedFileAttachmentsSizeColor?: string;
    selectedFileAttachmentsIcon?: JSX.Element;
    selectedAttachmentsBorderRadius?: string;
    replyMessageIcon?: JSX.Element;
}
declare const SendMessageInput: React.FC<SendMessageProps>;
export declare const MentionsContainer: import("styled-components").StyledComponent<"span", any, {}, never>;
export default SendMessageInput;
