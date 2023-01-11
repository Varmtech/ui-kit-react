import React, { FC } from 'react';
import { ICustomColors } from '../Channel/types';
import { IChannel } from '../../types';
interface IChannelListProps {
    customColors?: ICustomColors;
    List?: FC<{
        channels: IChannel[];
        loadMoreChannels: (count?: number) => void;
        children?: React.ReactNode;
    }>;
    ListItem?: FC<any>;
    filter?: {
        channelType: 'Public' | 'Private' | 'Direct';
    };
    limit?: number;
    sort?: 'byLastMessage' | 'byCreationDate';
    avatar?: boolean;
    showSearch?: boolean;
    forceUpdateChannelList?: () => void;
    showCreateChannelIcon?: boolean;
    notificationsIsMutedIcon?: JSX.Element;
    notificationsIsMutedIconColor?: string;
    onChannelDeleted?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onChannelCreated?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onChannelHidden?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onChannelVisible?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
    onAddedToChannel?: (setChannels: (channels: IChannel[]) => void, channel: IChannel) => void;
}
declare const ChannelList: React.FC<IChannelListProps>;
export default ChannelList;
