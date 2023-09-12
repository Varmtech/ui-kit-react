import React, { FC } from 'react';
import { IChannel, IMessage } from '../../types';
interface MessagesProps {
    fontFamily?: string;
    ownMessageOnRightSide?: boolean;
    messageWidthPercent?: string | number;
    messageStatusAndTimePosition?: 'onMessage' | 'bottomOfMessage';
    messageStatusDisplayingType?: 'ticks' | 'text';
    ownMessageBackground?: string;
    incomingMessageBackground?: string;
    showMessageStatus?: boolean;
    showMessageTimeAndStatusOnlyOnHover?: boolean;
    showMessageTime?: boolean;
    showMessageStatusForEachMessage?: boolean;
    showMessageTimeForEachMessage?: boolean;
    hoverBackground?: boolean;
    showSenderNameOnDirectChannel?: boolean;
    showSenderNameOnOwnMessages?: boolean;
    showSenderNameOnGroupChannel?: boolean;
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
    showOwnAvatar?: boolean;
    messageReaction?: boolean;
    editMessage?: boolean;
    copyMessage?: boolean;
    replyMessage?: boolean;
    replyMessageInThread?: boolean;
    forwardMessage?: boolean;
    deleteMessage?: boolean;
    selectMessage?: boolean;
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
    allowEditDeleteIncomingMessage?: boolean;
    starIconOrder?: number;
    reportIconOrder?: number;
    reactionIconTooltipText?: string;
    editIconTooltipText?: string;
    replyIconTooltipText?: string;
    copyIconTooltipText?: string;
    replyInThreadIconTooltipText?: string;
    forwardIconTooltipText?: string;
    deleteIconTooltipText?: string;
    selectIconTooltipText?: string;
    starIconTooltipText?: string;
    reportIconTooltipText?: string;
    messageActionIconsColor?: string;
    dateDividerFontSize?: string;
    dateDividerTextColor?: string;
    dateDividerBorder?: string;
    dateDividerBorderRadius?: string;
    dateDividerBackgroundColor?: string;
    showTopFixedDate?: boolean;
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
    reactionsContainerPadding?: string;
    reactionsContainerBackground?: string;
    reactionsContainerTopPosition?: string;
    reactionsDetailsPopupBorderRadius?: string;
    reactionsDetailsPopupHeaderItemsStyle?: 'bubbles' | 'inline';
    newMessagesSeparatorText?: string;
    newMessagesSeparatorFontSize?: string;
    newMessagesSeparatorTextColor?: string;
    newMessagesSeparatorWidth?: string;
    newMessagesSeparatorBorder?: string;
    newMessagesSeparatorBorderRadius?: string;
    newMessagesSeparatorBackground?: string;
    newMessagesSeparatorTextLeftRightSpacesWidth?: string;
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
    attachmentsPreview?: boolean;
    sameUserMessageSpacing?: string;
    differentUserMessageSpacing?: string;
}
declare const MessagesContainer: React.FC<MessagesProps>;
export default MessagesContainer;
