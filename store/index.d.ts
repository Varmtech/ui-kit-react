declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    ChannelReducer: {
        channelsLoadingState: string | null;
        channelsForForwardLoadingState: string | null;
        usersLoadingState: string | null;
        channelsHasNext: boolean;
        channelsForForwardHasNext: boolean;
        channels: import("../types").IChannel[];
        searchedChannels: {
            chats_groups: import("../types").IChannel[];
            channels: import("../types").IChannel[];
            contacts: import("../types").IContact[];
        };
        closeSearchChannel: boolean;
        channelsForForward: import("../types").IChannel[];
        activeChannel: {} | import("../types").IChannel;
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
        addedChannel: import("../types").IChannel | null;
        addedToChannel: import("../types").IChannel | null;
        deletedChannel: import("../types").IChannel | null;
        hiddenChannel: import("../types").IChannel | null;
        visibleChannel: import("../types").IChannel | null;
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
    MessageReducer: import("./message/reducers").IMessageStore;
    MembersReducer: import("./member/reducers").IMembersStore;
    ThemeReducer: import("./theme/reducers").IThemeStore;
    UserReducer: import("./user/reducers").IUserStore;
}>, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[any, ...any[]]>>;
export default store;
