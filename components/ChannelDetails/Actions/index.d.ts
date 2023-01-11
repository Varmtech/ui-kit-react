/// <reference types="react" />
import { IChannel } from '../../../types';
interface IProps {
    channel: IChannel;
    actionMenuOpen?: () => void;
    menuIsOpen?: boolean;
    toggleable: boolean;
    showMuteUnmuteNotifications?: boolean;
    muteUnmuteNotificationsOrder?: number;
    muteNotificationIcon?: JSX.Element;
    unmuteNotificationIcon?: JSX.Element;
    muteNotificationIconColor?: string;
    unmuteNotificationIconColor?: string;
    muteUnmuteNotificationSwitcherColor?: string;
    muteUnmuteNotificationTextColor?: string;
    showStarredMessages?: boolean;
    starredMessagesOrder?: number;
    staredMessagesIcon?: JSX.Element;
    staredMessagesIconColor?: string;
    staredMessagesTextColor?: string;
    showPinChannel?: boolean;
    pinChannelOrder?: number;
    pinChannelIcon?: JSX.Element;
    pinChannelIconColor?: string;
    pinChannelTextColor?: string;
    showMarkAsReadUnread?: boolean;
    markAsReadUnreadOrder?: number;
    markAsReadIcon?: JSX.Element;
    markAsUnreadIcon?: JSX.Element;
    markAsReadIconColor?: string;
    markAsUnreadIconColor?: string;
    markAsReadUnreadTextColor?: string;
    showLeaveChannel?: boolean;
    leaveChannelOrder?: number;
    leaveChannelIcon?: JSX.Element;
    leaveChannelIconColor?: string;
    leaveChannelTextColor?: string;
    showReportChannel?: boolean;
    reportChannelOrder?: number;
    reportChannelIcon?: JSX.Element;
    reportChannelIconColor?: string;
    reportChannelTextColor?: string;
    showDeleteChannel?: boolean;
    deleteChannelOrder?: number;
    deleteChannelIcon?: JSX.Element;
    deleteChannelIconColor?: string;
    deleteChannelTextColor?: string;
    showBlockAndLeaveChannel?: boolean;
    blockAndLeaveChannelOrder?: number;
    blockAndLeaveChannelIcon?: JSX.Element;
    blockAndLeaveChannelIconColor?: string;
    blockAndLeaveChannelTextColor?: string;
}
declare const Actions: ({ channel, actionMenuOpen, menuIsOpen, toggleable, showMuteUnmuteNotifications, muteUnmuteNotificationsOrder, muteNotificationIcon, unmuteNotificationIcon, muteNotificationIconColor, unmuteNotificationIconColor, muteUnmuteNotificationTextColor, showStarredMessages, starredMessagesOrder, staredMessagesIcon, staredMessagesIconColor, staredMessagesTextColor, showPinChannel, pinChannelOrder, pinChannelIcon, pinChannelIconColor, pinChannelTextColor, showMarkAsReadUnread, markAsReadUnreadOrder, markAsReadIcon, markAsUnreadIcon, markAsReadIconColor, markAsUnreadIconColor, markAsReadUnreadTextColor, showLeaveChannel, leaveChannelOrder, leaveChannelIcon, leaveChannelIconColor, leaveChannelTextColor, showReportChannel, reportChannelIcon, reportChannelOrder, reportChannelIconColor, reportChannelTextColor, showDeleteChannel, deleteChannelIcon, deleteChannelIconColor, deleteChannelTextColor, showBlockAndLeaveChannel, blockAndLeaveChannelIcon, blockAndLeaveChannelIconColor, blockAndLeaveChannelTextColor }: IProps) => JSX.Element;
export default Actions;
