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
        searchValue: string;
        handleSetChannelListWithGroups: (channelGroupList: IChannelGroup[]) => void;
        children: React.ReactNode;
        activeChannel?: IChannel;
        setActiveChannel?: (channel: IChannel) => void;
    }>;
    ListItem?: FC<any>;
    Profile?: JSX.Element;
    CreateChannel?: JSX.Element;
    ChannelsTitle?: JSX.Element;
    backgroundColor?: string;
    searchInputBackgroundColor?: string;
    searchInputTextColor?: string;
    searchChannelsPosition?: 'inline' | 'bottom';
    searchInputBorderRadius?: string;
    getActiveChannel?: (channel: IChannel) => void;
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
    onChannelDeleted?: (channelList: IChannel[], deletedChannel: IChannel, setChannels: (updatedChannelList: IChannel[]) => void) => void;
    onChannelCreated?: (channelList: IChannel[], createdChannel: IChannel, setChannels: (updatedChannelList: IChannel[]) => void) => void;
    onChannelHidden?: (channelList: IChannel[], hiddenChannel: IChannel, setChannels: (updatedChannelList: IChannel[]) => void) => void;
    onChannelVisible?: (channelList: IChannel[], visibleChannel: IChannel, setChannels: (updatedChannelList: IChannel[]) => void) => void;
    onAddedToChannel?: (channelList: IChannel[], channel: IChannel, setChannels: (updatedChannelList: IChannel[]) => void) => void;
}
declare const ChannelList: React.FC<IChannelListProps>;
export default ChannelList;
