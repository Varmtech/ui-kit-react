import React, { FC } from 'react';
import { IAttachment, IChannel, IMessage } from '../../types';
interface IMessageProps {
    message: IMessage;
    channel: IChannel;
    MessageActionsMenu?: FC<{
        message: IMessage;
        channel: IChannel;
        handleSetMessageForEdit?: () => void;
        handleResendMessage?: () => void;
        handleOpenDeleteMessage?: () => void;
        handleOpenForwardMessage?: () => void;
        handleCopyMessage?: () => void;
        handleReportMessage?: () => void;
        handleOpenEmojis?: () => void;
        handleSelectMessage?: () => void;
        handleReplyMessage?: () => void;
        isThreadMessage?: boolean;
        rtlDirection?: boolean;
    }>;
    isPendingMessage?: boolean;
    prevMessage?: IMessage;
    nextMessage: IMessage;
    stopScrolling: (stop: boolean) => void;
    setLastVisibleMessageId?: (msgId: string) => void;
    handleScrollToRepliedMessage?: (msgId: string) => void;
    handleMediaItemClick?: (attachment: IAttachment) => void;
    unreadMessageId: string;
    isUnreadMessage: boolean;
    isThreadMessage: boolean;
    fontFamily?: string;
    ownMessageOnRightSide?: boolean;
    messageWidthPercent?: string | number;
    showSenderNameOnDirectChannel?: boolean;
    showSenderNameOnGroupChannel?: boolean;
    showSenderNameOnOwnMessages?: boolean;
    messageStatusAndTimePosition?: 'bottomOfMessage' | 'onMessage';
    messageStatusDisplayingType?: 'ticks' | 'text';
    ownMessageBackground?: string;
    incomingMessageBackground?: string;
    showOwnAvatar?: boolean;
    showMessageStatus?: boolean;
    showMessageTimeAndStatusOnlyOnHover?: boolean;
    showMessageTime?: boolean;
    showMessageStatusForEachMessage?: boolean;
    showMessageTimeForEachMessage?: boolean;
    hoverBackground?: boolean;
    messageReaction?: boolean;
    editMessage?: boolean;
    copyMessage?: boolean;
    replyMessage?: boolean;
    replyMessageInThread?: boolean;
    forwardMessage?: boolean;
    deleteMessage?: boolean;
    selectMessage?: boolean;
    allowEditDeleteIncomingMessage?: boolean;
    reportMessage?: boolean;
    reactionIcon?: JSX.Element;
    editIcon?: JSX.Element;
    copyIcon?: JSX.Element;
    replyIcon?: JSX.Element;
    replyInThreadIcon?: JSX.Element;
    forwardIcon?: JSX.Element;
    deleteIcon?: JSX.Element;
    selectIcon?: JSX.Element;
    starIcon?: JSX.Element;
    staredIcon?: JSX.Element;
    reportIcon?: JSX.Element;
    openFrequentlyUsedReactions?: boolean;
    fixEmojiCategoriesTitleOnTop?: boolean;
    emojisCategoryIconsPosition?: 'top' | 'bottom';
    emojisContainerBorderRadius?: string;
    reactionIconOrder?: number;
    editIconOrder?: number;
    copyIconOrder?: number;
    replyIconOrder?: number;
    replyInThreadIconOrder?: number;
    forwardIconOrder?: number;
    deleteIconOrder?: number;
    selectIconOrder?: number;
    starIconOrder?: number;
    reportIconOrder?: number;
    reactionIconTooltipText?: string;
    editIconTooltipText?: string;
    copyIconTooltipText?: string;
    replyIconTooltipText?: string;
    replyInThreadIconTooltipText?: string;
    forwardIconTooltipText?: string;
    deleteIconTooltipText?: string;
    selectIconTooltipText?: string;
    starIconTooltipText?: string;
    reportIconTooltipText?: string;
    messageActionIconsColor?: string;
    inlineReactionIcon?: JSX.Element;
    reactionsDisplayCount?: number;
    showEachReactionCount?: boolean;
    showTotalReactionCount?: boolean;
    reactionItemBorder?: string;
    reactionItemBorderRadius?: string;
    reactionItemBackground?: string;
    reactionItemPadding?: string;
    reactionItemMargin?: string;
    reactionsFontSize?: string;
    reactionsContainerBoxShadow?: string;
    reactionsContainerBorder?: string;
    reactionsContainerBorderRadius?: string;
    reactionsContainerBackground?: string;
    reactionsContainerTopPosition?: string;
    reactionsDetailsPopupBorderRadius?: string;
    reactionsDetailsPopupHeaderItemsStyle?: 'bubbles' | 'inline';
    reactionsContainerPadding?: string;
    fileAttachmentsBoxWidth?: number;
    fileAttachmentsBoxBackground?: string;
    fileAttachmentsBoxBorder?: string;
    fileAttachmentsTitleColor?: string;
    fileAttachmentsSizeColor?: string;
    fileAttachmentsIcon?: JSX.Element;
    imageAttachmentMaxWidth?: number;
    imageAttachmentMaxHeight?: number;
    videoAttachmentMaxWidth?: number;
    videoAttachmentMaxHeight?: number;
    sameUserMessageSpacing?: string;
    differentUserMessageSpacing?: string;
    selectedMessagesMap?: Map<string, IMessage>;
    contactsMap: {
        [key: string]: any;
    };
    openedMessageMenuId?: string;
    tabIsActive?: boolean;
    connectionStatus: string;
}
declare const _default: React.MemoExoticComponent<({ message, channel, MessageActionsMenu, handleScrollToRepliedMessage, handleMediaItemClick, stopScrolling, prevMessage, nextMessage, setLastVisibleMessageId, isUnreadMessage, unreadMessageId, isThreadMessage, fontFamily, ownMessageOnRightSide, messageWidthPercent, showSenderNameOnDirectChannel, showSenderNameOnGroupChannel, showSenderNameOnOwnMessages, messageStatusAndTimePosition, messageStatusDisplayingType, ownMessageBackground, incomingMessageBackground, showOwnAvatar, showMessageStatus, showMessageTimeAndStatusOnlyOnHover, showMessageTime, showMessageStatusForEachMessage, showMessageTimeForEachMessage, hoverBackground, messageReaction, editMessage, copyMessage, replyMessage, replyMessageInThread, deleteMessage, selectMessage, allowEditDeleteIncomingMessage, forwardMessage, reportMessage, reactionIcon, editIcon, copyIcon, replyIcon, replyInThreadIcon, forwardIcon, deleteIcon, selectIcon, starIcon, staredIcon, reportIcon, reactionIconOrder, openFrequentlyUsedReactions, editIconOrder, copyIconOrder, replyIconOrder, replyInThreadIconOrder, forwardIconOrder, deleteIconOrder, selectIconOrder, starIconOrder, reportIconOrder, reactionIconTooltipText, editIconTooltipText, copyIconTooltipText, replyIconTooltipText, replyInThreadIconTooltipText, forwardIconTooltipText, deleteIconTooltipText, selectIconTooltipText, starIconTooltipText, reportIconTooltipText, messageActionIconsColor, fileAttachmentsIcon, reactionsDisplayCount, showEachReactionCount, showTotalReactionCount, reactionItemBorder, reactionItemBorderRadius, reactionItemBackground, reactionItemPadding, reactionItemMargin, reactionsFontSize, reactionsContainerBoxShadow, reactionsContainerBorder, reactionsContainerBorderRadius, reactionsContainerBackground, reactionsContainerPadding, reactionsContainerTopPosition, reactionsDetailsPopupBorderRadius, reactionsDetailsPopupHeaderItemsStyle, fileAttachmentsBoxWidth, fileAttachmentsBoxBorder, fileAttachmentsTitleColor, fileAttachmentsSizeColor, imageAttachmentMaxWidth, imageAttachmentMaxHeight, videoAttachmentMaxWidth, videoAttachmentMaxHeight, emojisCategoryIconsPosition, emojisContainerBorderRadius, fixEmojiCategoriesTitleOnTop, sameUserMessageSpacing, differentUserMessageSpacing, selectedMessagesMap, contactsMap, openedMessageMenuId, tabIsActive, connectionStatus }: IMessageProps) => JSX.Element>;
export default _default;
export declare const MessageStatusAndTime: import("styled-components").StyledComponent<"div", any, {
    withAttachment?: boolean | undefined;
    fileAttachment?: boolean | undefined;
    hide?: boolean | undefined;
    isSelfMessage?: boolean | undefined;
    marginBottom?: string | undefined;
    leftMargin?: boolean | undefined;
    rtlDirection?: boolean | undefined;
    bottomOfMessage?: boolean | undefined;
    showOnlyOnHover?: boolean | undefined;
}, never>;
