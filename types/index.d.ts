export interface IAction {
    type: string;
    payload?: any;
}
export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    state: string;
    blocked?: boolean;
    presence?: {
        state: string;
        status?: string;
        lastActiveAt?: Date | null;
    };
}
export interface IAddMember {
    id: string;
    role: string;
}
export interface ICreateChannel {
    metadata?: any;
    label?: string;
    type: string;
    userId?: string;
    members?: IAddMember[];
}
export interface IAttachment {
    id?: string;
    messageId: string;
    name: string;
    type: string;
    metadata?: any;
    url: any;
    size: number;
    createdAt: Date;
    upload: boolean;
    user?: IUser;
    tid?: string;
    attachmentUrl: string;
    data: any;
    cachedUrl?: string;
}
declare class AttachmentBuilder {
    url: string;
    type: string;
    name?: string;
    metadata?: string;
    upload?: boolean;
    constructor(url: string, type: string);
    setName: (name: string) => this;
    setMetadata: (metadata: string) => this;
    setUpload: (upload: boolean) => this;
    create: () => IAttachment;
}
export interface IReaction {
    id: string;
    key: string;
    score: number;
    reason: string;
    createdAt: Date;
    messageId: string;
    user: IUser;
}
export interface IBodyAttribute {
    type: string;
    metadata: string;
    offset: number;
    length: number;
}
export interface IMessage {
    id: string;
    tid?: string;
    body: string;
    user: IUser;
    createdAt: Date;
    updatedAt?: Date;
    type: string;
    deliveryStatus: string;
    markerTotals: {
        name: string;
        count: number;
    }[];
    userMarkers: {
        name: string;
        messageId: string;
        createdAt: Date;
        user: IUser | null;
    }[];
    incoming: boolean;
    metadata: any;
    state: string;
    userReactions: IReaction[] | [];
    reactionTotals: {
        key: string;
        count: number;
        score: number;
    }[];
    attachments: IAttachment[] | [];
    mentionedUsers: IUser[];
    requestedMentionUserIds: string[] | null;
    parentMessage?: IMessage | null;
    bodyAttributes: IBodyAttribute[] | [];
    parentId?: string;
    repliedInThread?: boolean;
    replyCount?: number;
    transient: boolean;
    silent: boolean;
    forwardingDetails?: {
        channelId: string;
        hops: number;
        messageId: string;
        user: IUser;
    };
}
export interface IMember extends IUser {
    role: string;
}
export interface IChannel {
    id: string;
    parentId?: string;
    uri?: string;
    type: string;
    subject?: string;
    avatarUrl?: string;
    metadata: any;
    createdAt: Date;
    updatedAt: Date | null;
    messagesClearedAt: Date | null;
    memberCount: number;
    messageCount: number;
    createdBy: IUser;
    userRole: string;
    unread: boolean;
    newMessageCount: number;
    newMentionCount: number;
    newReactedMessageCount: number;
    hidden: boolean;
    archived: boolean;
    muted: boolean;
    mutedTill: Date | null;
    pinnedAt: Date | null;
    lastReceivedMsgId: string;
    lastDisplayedMsgId: string;
    messageRetentionPeriod?: number;
    isMockChannel?: boolean;
    isLinkedChannel?: boolean;
    backToLinkedChannel?: boolean;
    linkedFrom?: string;
    lastMessage: IMessage;
    messages: IMessage[];
    members: IMember[];
    newReactions: IReaction[];
    lastReactedMessage?: IMessage;
    delete: () => Promise<void>;
    deleteAllMessages: (forEveryone?: boolean) => Promise<void>;
    hide: () => Promise<boolean>;
    unhide: () => Promise<boolean>;
    markAsUnRead: () => Promise<IChannel>;
    mute: (_muteExpireTime: number) => Promise<IChannel>;
    unmute: () => Promise<IChannel>;
    markMessagesAsReceived: (_messageIds: string[]) => Promise<void>;
    markMessagesAsDisplayed: (_messageIds: string[]) => Promise<void>;
    startTyping: () => void;
    stopTyping: () => void;
    sendMessage: (message: any) => Promise<any>;
    editMessage: (message: any) => Promise<any>;
    reSendMessage: (failedMessage: any) => Promise<any>;
    deleteMessageById: (messageId: string) => Promise<any>;
    deleteMessage: (message: any) => Promise<any>;
    addReaction: (messageId: string, key: string, score: number, reason: string, enforceUnique: boolean) => Promise<{
        message: any;
        reaction: any;
    }>;
    deleteReaction: (messageId: string, key: string) => Promise<{
        message: any;
        reaction: any;
    }>;
    createMessageBuilder: () => any;
    createAttachmentBuilder: (url: string, type: string) => AttachmentBuilder;
    createThread: (messageId: string) => IChannel;
    getMessagesById: (messageIds: string[]) => Promise<IMessage[]>;
}
export interface IMedia extends IAttachment {
    user: IUser;
    updatedAt: Date;
}
export interface IMarker {
    messageIds: string[];
    user: IUser;
    name: string;
    createAt: Date;
}
export interface IRole {
    name: string;
    permissions?: string[];
    priority?: number;
}
export interface IContact {
    id: string;
    firstName?: string;
    lastName?: string;
    metadata?: string;
    keys: any[];
    user: IUser;
}
export interface IContactsMap {
    [key: string]: IContact;
}
export declare type MuteTime = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 24;
export {};
