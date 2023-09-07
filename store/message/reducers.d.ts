import { IAction, IMarker, IMessage, IReaction } from '../../types';
export interface IMessageStore {
    messagesLoadingState: number | null;
    messagesHasNext: boolean;
    messagesHasPrev: boolean;
    threadMessagesHasNext: boolean;
    threadMessagesHasPrev: boolean;
    activeChannelMessages: any[];
    pendingMessages: {
        [key: string]: IMessage[];
    };
    activeChannelNewMessage: IMessage | null;
    activeTabAttachments: any[];
    attachmentsForPopup: any[];
    attachmentHasNext: boolean;
    attachmentForPopupHasNext: boolean;
    messageToEdit: IMessage | null;
    messageForReply?: IMessage | null;
    activeChannelMessageUpdated: {
        messageId: string;
        params: IMessage;
    } | null;
    activeChannelNewMarkers: {
        name: string;
        markersMap: {
            [key: string]: IMarker;
        };
    };
    scrollToNewMessage: {};
    showScrollToNewMessageButton: boolean;
    sendMessageInputHeight: number;
    attachmentsUploadingState: {
        [key: string]: any;
    };
    scrollToMessage: string | null;
    reactionsList: IReaction[];
    reactionsHasNext: boolean;
    reactionsLoadingState: number | null;
    openedMessageMenu: string;
    attachmentsUploadingProgress: {
        [key: string]: {
            uploaded: number;
            total: number;
            progress?: number;
        };
    };
    playingAudioId: string | null;
}
declare const _default: (state?: IMessageStore, { type, payload }?: IAction) => IMessageStore;
export default _default;
