import React, { FC } from 'react';
import { IChannel } from '../../types';
interface IChannelGroup {
    groupName: string;
    channelList: IChannel[];
}
interface IChannelListProps {
    List?: FC<{
        channels: IChannel[];
        loadMoreChannels: (count?: number) => void;
        searchValue?: string;
        handleSetChannelListWithGroups?: (channelListGroups: IChannelGroup[]) => void;
        children?: React.ReactNode;
    }>;
    ListItem?: FC<any>;
    searchChannelsPosition?: 'inline' | 'bottom';
    searchInputBorderRadius?: string;
    getActiveChannel?: (channel: IChannel) => void;
    Profile?: JSX.Element;
    filter?: {
        channelType?: string;
    };
    limit?: number;
    sort?: 'byLastMessage' | 'byCreationDate';
    avatar?: boolean;
    showSearch?: boolean;
    searchOption?: 'custom' | 'default';
    forceUpdateChannelList?: () => void;
    showCreateChannelIcon?: boolean;
    uriPrefixOnCreateChannel?: string;
    notificationsIsMutedIcon?: JSX.Element;
    notificationsIsMutedIconColor?: string;
    createChannelIcon?: JSX.Element;
    newChannelIcon?: JSX.Element;
    newGroupIcon?: JSX.Element;
    newChatIcon?: JSX.Element;
    uploadPhotoIcon?: JSX.Element;
    createChannelIconHoverBackground?: string;
    selectedChannelBackground?: string;
    selectedChannelLeftBorder?: string;
    selectedChannelBorderRadius?: string;
    selectedChannelPaddings?: string;
    channelsPaddings?: string;
    channelsMargin?: string;
    onChannelDeleted?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onChannelCreated?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onChannelHidden?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onChannelVisible?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onAddedToChannel?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
}
declare const ChannelList: React.FC<IChannelListProps>;
export default ChannelList;
