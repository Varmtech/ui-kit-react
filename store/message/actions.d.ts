import { IAttachment, IChannel, IMessage, IReaction } from '../../types';
export declare function sendMessageAC(message: any, channelId: string, connectionState: string, sendAttachmentsAsSeparateMessage?: boolean, isResend?: boolean): {
    type: string;
    payload: {
        message: any;
        channelId: string;
        connectionState: string;
        sendAttachmentsAsSeparateMessage: boolean | undefined;
        isResend: boolean | undefined;
    };
};
export declare function sendTextMessageAC(message: any, channelId: string, connectionState: string): {
    type: string;
    payload: {
        message: any;
        channelId: string;
        connectionState: string;
    };
};
export declare function resendMessageAC(message: any, channelId: string, connectionState: string): {
    type: string;
    payload: {
        channelId: string;
        message: any;
        connectionState: string;
    };
};
export declare function forwardMessageAC(message: any, channelId: string, connectionState: string): {
    type: string;
    payload: {
        message: any;
        channelId: string;
        connectionState: string;
    };
};
export declare function deleteMessageAC(channelId: string, messageId: string, deleteOption: 'forMe' | 'forEveryone'): {
    type: string;
    payload: {
        channelId: string;
        messageId: string;
        deleteOption: "forEveryone" | "forMe";
    };
};
export declare function deleteMessageFromListAC(messageId: string): {
    type: string;
    payload: {
        messageId: string;
    };
};
export declare function editMessageAC(channelId: string, message: IMessage): {
    type: string;
    payload: {
        channelId: string;
        message: IMessage;
    };
};
export declare function setMessageToEditAC(message: IMessage | null): {
    type: string;
    payload: {
        message: IMessage | null;
    };
};
export declare function getMessagesAC(channel: IChannel, loadWithLastMessage?: boolean, messageId?: string, limit?: number): {
    type: string;
    payload: {
        channel: IChannel;
        loadWithLastMessage: boolean | undefined;
        messageId: string | undefined;
        limit: number | undefined;
    };
};
export declare function setScrollToMessagesAC(messageId: string | null): {
    type: string;
    payload: {
        messageId: string | null;
    };
};
export declare function setMessagesLoadingStateAC(state: number): {
    type: string;
    payload: {
        state: number;
    };
};
export declare function addMessagesAC(messages: any, direction: string): {
    type: string;
    payload: {
        messages: any;
        direction: string;
    };
};
export declare function setMessagesAC(messages: any): {
    type: string;
    payload: {
        messages: any;
    };
};
export declare function addReactionAC(channelId: string, messageId: string, key: string, score: number, reason: string, enforceUnique: boolean): {
    type: string;
    payload: {
        channelId: string;
        messageId: string;
        key: string;
        score: number;
        reason: string;
        enforceUnique: boolean;
    };
};
export declare function deleteReactionAC(channelId: string, messageId: string, key: string, isLastReaction?: boolean): {
    type: string;
    payload: {
        channelId: string;
        messageId: string;
        key: string;
        isLastReaction: boolean | undefined;
    };
};
export declare function addReactionToMessageAC(message: IMessage, reaction: IReaction, isSelf: boolean): {
    type: string;
    payload: {
        message: IMessage;
        reaction: IReaction;
        isSelf: boolean;
    };
};
export declare function deleteReactionFromMessageAC(message: IMessage, reaction: IReaction, isSelf: boolean): {
    type: string;
    payload: {
        message: IMessage;
        reaction: IReaction;
        isSelf: boolean;
    };
};
export declare function getReactionsAC(messageId: string, key?: string, limit?: number): {
    type: string;
    payload: {
        messageId: string;
        key: string | undefined;
        limit: number | undefined;
    };
};
export declare function loadMoreReactionsAC(limit: number): {
    type: string;
    payload: {
        limit: number;
    };
};
export declare function setReactionsListAC(reactions: IReaction[], hasNext: boolean): {
    type: string;
    payload: {
        reactions: IReaction[];
        hasNext: boolean;
    };
};
export declare function addReactionsToListAC(reactions: IReaction[], hasNext: boolean): {
    type: string;
    payload: {
        reactions: IReaction[];
        hasNext: boolean;
    };
};
export declare function addReactionToListAC(reaction: IReaction): {
    type: string;
    payload: {
        reaction: IReaction;
    };
};
export declare function deleteReactionFromListAC(reaction: IReaction): {
    type: string;
    payload: {
        reaction: IReaction;
    };
};
export declare function setReactionsLoadingStateAC(state: number): {
    type: string;
    payload: {
        state: number;
    };
};
export declare function updateAttachmentUploadingStateAC(attachmentUploadingState: string, attachmentId?: any): {
    type: string;
    payload: {
        attachmentUploadingState: string;
        attachmentId: any;
    };
};
export declare function updateAttachmentUploadingProgressAC(uploaded: number, total: number, attachmentId: any): {
    type: string;
    payload: {
        uploaded: number;
        total: number;
        attachmentId: any;
    };
};
export declare function removeAttachmentProgressAC(attachmentId: any): {
    type: string;
    payload: {
        attachmentId: any;
    };
};
export declare function emptyChannelAttachmentsAC(): {
    type: string;
};
export declare function addMessageAC(message: IMessage): {
    type: string;
    payload: {
        message: IMessage;
    };
};
export declare function scrollToNewMessageAC(scrollToBottom: boolean, updateMessageList?: boolean, isIncomingMessage?: boolean): {
    type: string;
    payload: {
        scrollToBottom: boolean;
        updateMessageList: boolean | undefined;
        isIncomingMessage: boolean | undefined;
    };
};
export declare function showScrollToNewMessageButtonAC(state: boolean): {
    type: string;
    payload: {
        state: boolean;
    };
};
export declare function loadMoreMessagesAC(channelId: string, limit: number, direction: string, messageId: string, hasNext: boolean): {
    type: string;
    payload: {
        limit: number;
        direction: string;
        channelId: string;
        messageId: string;
        hasNext: boolean;
    };
};
export declare function setMessagesHasPrevAC(hasPrev: boolean): {
    type: string;
    payload: {
        hasPrev: boolean;
    };
};
export declare function setMessagesHasNextAC(hasNext: boolean): {
    type: string;
    payload: {
        hasNext: boolean;
    };
};
export declare function updateMessageAC(messageId: string, params: any, addIfNotExists?: boolean): {
    type: string;
    payload: {
        messageId: string;
        params: any;
        addIfNotExists: boolean | undefined;
    };
};
export declare function updateMessagesStatusAC(name: string, markersMap: {
    [key: string]: boolean;
}): {
    type: string;
    payload: {
        name: string;
        markersMap: {
            [key: string]: boolean;
        };
    };
};
export declare function clearMessagesAC(): {
    type: string;
};
export declare function getAttachmentsAC(channelId: string, attachmentType: string, limit?: number, direction?: string, attachmentId?: string, forPopup?: boolean): {
    type: string;
    payload: {
        channelId: string;
        attachmentType: string;
        limit: number | undefined;
        direction: string | undefined;
        forPopup: boolean | undefined;
        attachmentId: string | undefined;
    };
};
export declare function setAttachmentsAC(attachments: IAttachment[]): {
    type: string;
    payload: {
        attachments: IAttachment[];
    };
};
export declare function removeAttachmentAC(attachmentId: string): {
    type: string;
    payload: {
        attachmentId: string;
    };
};
export declare function setAttachmentsForPopupAC(attachments: IAttachment[]): {
    type: string;
    payload: {
        attachments: IAttachment[];
    };
};
export declare function loadMoreAttachmentsAC(limit: number): {
    type: string;
    payload: {
        limit: number;
    };
};
export declare function addAttachmentsAC(attachments: IAttachment[]): {
    type: string;
    payload: {
        attachments: IAttachment[];
    };
};
export declare function addAttachmentsForPopupAC(attachments: IAttachment[], direction: string): {
    type: string;
    payload: {
        attachments: IAttachment[];
        direction: string;
    };
};
export declare function setAttachmentsCompleteAC(hasPrev: boolean): {
    type: string;
    payload: {
        hasPrev: boolean;
    };
};
export declare function setAttachmentsCompleteForPopupAC(hasPrev: boolean): {
    type: string;
    payload: {
        hasPrev: boolean;
    };
};
export declare function pauseAttachmentUploadingAC(attachmentId: string): {
    type: string;
    payload: {
        attachmentId: string;
    };
};
export declare function resumeAttachmentUploadingAC(attachmentId: string): {
    type: string;
    payload: {
        attachmentId: string;
    };
};
export declare function setSendMessageInputHeightAC(height: number): {
    type: string;
    payload: {
        height: number;
    };
};
export declare function setMessageMenuOpenedAC(messageId: string): {
    type: string;
    payload: {
        messageId: string;
    };
};
export declare function setMessageForReplyAC(message: IMessage | null): {
    type: string;
    payload: {
        message: IMessage | null;
    };
};
export declare function setPlayingAudioIdAC(id: string | null): {
    type: string;
    payload: {
        id: string | null;
    };
};
export declare function addSelectedMessageAC(message: IMessage): {
    type: string;
    payload: {
        message: IMessage;
    };
};
export declare function removeSelectedMessageAC(messageId: string): {
    type: string;
    payload: {
        messageId: string;
    };
};
export declare function clearSelectedMessagesAC(): {
    type: string;
};
