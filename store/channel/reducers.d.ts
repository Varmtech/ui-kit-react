import { IAction, IChannel, IContact } from '../../types';
declare const _default: (state?: {
    channelsLoadingState: string | null;
    channelsForForwardLoadingState: string | null;
    usersLoadingState: string | null;
    channelsHasNext: boolean;
    channelsForForwardHasNext: boolean;
    channels: IChannel[];
    searchedChannels: {
        chats_groups: IChannel[];
        channels: IChannel[];
        contacts: IContact[];
    };
    closeSearchChannel: boolean;
    channelsForForward: IChannel[];
    activeChannel: {} | IChannel;
    roles: [];
    users: [];
    errorNotification: string;
    notifications: [];
    typingIndicator: {
        [key: string]: {
            typingState: boolean;
            from: {};
        };
    };
    searchValue: string;
    addedChannel: IChannel | null;
    addedToChannel: IChannel | null;
    deletedChannel: IChannel | null;
    hiddenChannel: IChannel | null;
    visibleChannel: IChannel | null;
    channelInfoIsOpen: boolean;
    channelEditMode: boolean;
    channelListWidth: number;
    isDragging: boolean;
    draggedAttachments: {
        attachment: File;
        type: "file" | "media";
    }[];
    tabIsActive: boolean;
    hideChannelList: boolean;
    draftIsRemoved: string;
}, { type, payload }?: IAction) => {
    channelsLoadingState: string | null;
    channelsForForwardLoadingState: string | null;
    usersLoadingState: string | null;
    channelsHasNext: boolean;
    channelsForForwardHasNext: boolean;
    channels: IChannel[];
    searchedChannels: {
        chats_groups: IChannel[];
        channels: IChannel[];
        contacts: IContact[];
    };
    closeSearchChannel: boolean;
    channelsForForward: IChannel[];
    activeChannel: {} | IChannel;
    roles: [];
    users: [];
    errorNotification: string;
    notifications: [];
    typingIndicator: {
        [key: string]: {
            typingState: boolean;
            from: {};
        };
    };
    searchValue: string;
    addedChannel: IChannel | null;
    addedToChannel: IChannel | null;
    deletedChannel: IChannel | null;
    hiddenChannel: IChannel | null;
    visibleChannel: IChannel | null;
    channelInfoIsOpen: boolean;
    channelEditMode: boolean;
    channelListWidth: number;
    isDragging: boolean;
    draggedAttachments: {
        attachment: File;
        type: "file" | "media";
    }[];
    tabIsActive: boolean;
    hideChannelList: boolean;
    draftIsRemoved: string;
};
export default _default;
