import React, { FC } from 'react';
import { IUser } from '../../types';
interface SendMessageProps {
    draggedAttachments?: boolean;
    handleAttachmentSelected?: (state: boolean) => void;
    disabled?: boolean;
    showAddEmojis?: boolean;
    AddEmojisIcon?: JSX.Element;
    emojiIcoOrder?: number;
    showAddAttachments?: boolean;
    AddAttachmentsIcon?: JSX.Element;
    attachmentIcoOrder?: number;
    sendIconOrder?: number;
    inputOrder?: number;
    CustomTypingIndicator?: FC<{
        from: IUser;
        typingState: boolean;
    }>;
    backgroundColor?: string;
    margin?: string;
    minHeight?: string;
    border?: string;
    borderRadius?: string;
    inputBorderRadius?: string;
    inputBackgroundColor?: string;
    inputPaddings?: string;
    selectedFileAttachmentsBoxWidth?: string;
    selectedFileAttachmentsBoxBackground?: string;
    selectedFileAttachmentsBoxBorder?: string;
    selectedFileAttachmentsTitleColor?: string;
    selectedFileAttachmentsSizeColor?: string;
    selectedFileAttachmentsIcon?: JSX.Element;
    selectedAttachmentsBorderRadius?: string;
    replyMessageIcon?: JSX.Element;
    editMessageIcon?: JSX.Element;
    voiceMessage?: boolean;
    sendAttachmentSeparately?: boolean;
    allowMentionUser?: boolean;
}
declare const SendMessageInput: React.FC<SendMessageProps>;
export declare const MentionsContainer: import("styled-components").StyledComponent<"div", any, {
    mentionsIsOpen?: boolean | undefined;
}, never>;
export default SendMessageInput;
