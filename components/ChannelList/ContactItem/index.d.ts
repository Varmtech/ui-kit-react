import React from 'react';
import { IContact } from '../../../types';
interface IChannelProps {
    contact: IContact;
    showAvatar?: boolean;
    theme?: string;
    notificationsIsMutedIcon?: JSX.Element;
    notificationsIsMutedIconColor?: string;
    selectedChannelLeftBorder?: string;
    selectedChannelBackground?: string;
    contactsMap: {
        [key: string]: IContact;
    };
    selectedChannelBorderRadius?: string;
    selectedChannelPaddings?: string;
    channelsPaddings?: string;
    channelsMargin?: string;
    createChatWithContact: (contact: IContact) => void;
}
declare const ContactItem: React.FC<IChannelProps>;
export default ContactItem;
export declare const ChannelInfo: import("styled-components").StyledComponent<"div", any, {
    avatar?: boolean | undefined;
    theme?: string | undefined;
}, never>;
export declare const AvatarWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const UserStatus: import("styled-components").StyledComponent<"span", any, {
    backgroundColor?: string | undefined;
}, never>;
