/// <reference types="react" />
import SceytChatClient from 'sceyt-chat';
import { ICustomAvatarColors } from '../Channel/types';
import { IAttachment, IChannel, IMessage, IUser } from '../../types';
export interface IProgress {
    loaded: number;
    total: number;
}
export interface IUploadTask {
    updateLocalFileLocation?: (newPath: String) => void;
    progress: (progress: IProgress) => void;
    failure: (error: Error) => void;
    success: (uri: string) => void;
    cancel: () => void;
    stop: () => void;
    resume: () => void;
}
export interface ICustomUploader {
    upload: (attachment: IAttachment, uploadTask: IUploadTask) => void;
    cancelRequest: (requestPromise: any) => void;
}
export interface IChatClientProps {
    client: SceytChatClient;
    theme?: 'dark' | 'light';
    avatarColors?: ICustomAvatarColors;
    hideUserPresence?: (user: IUser) => boolean;
    handleNewMessages?: (message: IMessage, channel: IChannel) => IMessage | null;
    showOnlyContactUsers?: boolean;
    sendAttachmentsAsSeparateMessages?: boolean;
    showNotifications?: boolean;
    children?: JSX.Element | JSX.Element[];
    logoSrc?: string;
    CustomUploader?: ICustomUploader;
    membersDisplayTextByChannelTypesMap?: {
        [key: string]: string;
    };
    defaultRolesByChannelTypesMap?: {
        [key: string]: string;
    };
    customColors?: {
        primaryColor?: string;
        primaryLight?: string;
        textColor1?: string;
        textColor2?: string;
        textColor3?: string;
        deletedUserAvatarBackground?: string;
        defaultAvatarBackground?: string;
    };
}
declare const SceytChatContainer: ({ client, theme, avatarColors, children, showOnlyContactUsers, handleNewMessages, sendAttachmentsAsSeparateMessages, membersDisplayTextByChannelTypesMap, defaultRolesByChannelTypesMap, logoSrc, CustomUploader, customColors, showNotifications, hideUserPresence }: IChatClientProps) => JSX.Element;
export default SceytChatContainer;
