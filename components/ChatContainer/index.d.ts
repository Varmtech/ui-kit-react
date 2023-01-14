/// <reference types="react" />
import SceytChatClient from 'sceyt-chat';
import { ICustomAvatarColors } from '../Channel/types';
import { IAttachment } from '../../types';
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
    upload: (file: File, uploadTask: IUploadTask) => void;
    download: (attachment: IAttachment, progressCallback?: (progress: any) => void) => Promise<string>;
}
export interface IChatClientProps {
    client: SceytChatClient;
    avatarColors?: ICustomAvatarColors;
    showContactInfoOnUserList?: boolean;
    sendAttachmentsAsSeparateMessages?: boolean;
    children?: JSX.Element | JSX.Element[];
    logoSrc?: string;
    CustomUploader?: ICustomUploader;
}
declare const SceytChatContainer: ({ client, avatarColors, children, showContactInfoOnUserList, sendAttachmentsAsSeparateMessages, logoSrc, CustomUploader }: IChatClientProps) => JSX.Element;
export default SceytChatContainer;
