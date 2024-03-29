import { IMessageStore } from './reducers';
export declare const activeChannelMessagesSelector: (store: {
    MessageReducer: IMessageStore;
}) => any[];
export declare const threadReplyMessagesSelector: (store: any) => any;
export declare const messagesLoadingState: (store: any) => any;
export declare const messagesHasNextSelector: (store: any) => any;
export declare const messagesHasPrevSelector: (store: any) => any;
export declare const threadMessagesHasNextSelector: (store: any) => any;
export declare const threadMessagesHasPrevSelector: (store: any) => any;
export declare const attachmentCompilationStateSelector: (store: any) => any;
export declare const attachmentsUploadProgressSelector: (store: any) => any;
export declare const activeTabAttachmentsSelector: (store: any) => any;
export declare const activeTabAttachmentsHasNextSelector: (store: any) => any;
export declare const attachmentsForPopupSelector: (store: any) => any;
export declare const attachmentsForPopupHasNextSelector: (store: any) => any;
export declare const messageForReplySelector: (store: any) => any;
export declare const messageForThreadReplySelector: (store: any) => any;
export declare const messageToEditSelector: (store: any) => any;
export declare const pendingMessagesSelector: (store: any) => any;
export declare const channelNewMessageSelector: (store: any) => any;
export declare const messageNewMarkersSelector: (store: any) => any;
export declare const messageUpdatedSelector: (store: any) => any;
export declare const scrollToNewMessageSelector: (store: any) => any;
export declare const showScrollToNewMessageButtonSelector: (store: any) => any;
export declare const sendMessageInputHeightSelector: (store: any) => any;
export declare const scrollToMessageSelector: (store: any) => any;
export declare const reactionsListSelector: (store: any) => any;
export declare const reactionsHasNextSelector: (store: any) => any;
export declare const reactionsLoadingStateSelector: (store: any) => any;
export declare const openedMessageMenuSelector: (store: any) => any;
export declare const playingAudioIdSelector: (store: any) => any;
export declare const selectedMessagesMapSelector: (store: any) => any;
