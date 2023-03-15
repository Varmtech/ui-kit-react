import React from 'react';
interface MessagesProps {
    fontFamily?: string;
    ownMessageOnRightSide?: boolean;
    messageWidthPercent?: string | number;
    messageTimePosition?: 'topOfMessage' | 'onMessage';
    ownMessageBackground?: string;
    incomingMessageBackground?: string;
    showMessageStatus?: boolean;
    hoverBackground?: boolean;
    showSenderNameOnDirectChannel?: boolean;
    showSenderNameOnOwnMessages?: boolean;
    showOwnAvatar?: boolean;
    messageReaction?: boolean;
    editMessage?: boolean;
    copyMessage?: boolean;
    replyMessage?: boolean;
    replyMessageInThread?: boolean;
    forwardMessage?: boolean;
    deleteMessage?: boolean;
    reportMessage?: boolean;
    reactionIcon?: JSX.Element;
    editIcon?: JSX.Element;
    copyIcon?: JSX.Element;
    replyIcon?: JSX.Element;
    replyInThreadIcon?: JSX.Element;
    forwardIcon?: JSX.Element;
    deleteIcon?: JSX.Element;
    starIcon?: JSX.Element;
    staredIcon?: JSX.Element;
    reportIcon?: JSX.Element;
    reactionIconOrder?: number;
    editIconOrder?: number;
    copyIconOrder?: number;
    replyIconOrder?: number;
    replyInThreadIconOrder?: number;
    forwardIconOrder?: number;
    deleteIconOrder?: number;
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
    newMessagesSeparatorText?: string;
    newMessagesSeparatorFontSize?: string;
    newMessagesSeparatorTextColor?: string;
    newMessagesSeparatorWidth?: string;
    newMessagesSeparatorBorder?: string;
    newMessagesSeparatorBorderRadius?: string;
    newMessagesSeparatorBackground?: string;
    newMessagesSeparatorTextLeftRightSpacesWidth?: string;
    fileAttachmentsBoxWidth?: string;
    fileAttachmentsBoxBackground?: string;
    fileAttachmentsBoxBorder?: string;
    fileAttachmentsTitleColor?: string;
    fileAttachmentsSizeColor?: string;
    fileAttachmentsIcon?: JSX.Element;
}
declare const MessageList: React.FC<MessagesProps>;
export default MessageList;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    stopScrolling?: boolean | undefined;
}, never>;
export declare const EmptyDiv: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MessageTopDate: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const DragAndDropContainer: import("styled-components").StyledComponent<"div", any, {
    topOffset?: number | undefined;
    height?: number | undefined;
}, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"span", any, {
    iconColor?: string | undefined;
}, never>;
export declare const DropAttachmentArea: import("styled-components").StyledComponent<"div", any, {
    margin?: string | undefined;
}, never>;
export declare const MessageWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NoMessagesContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
