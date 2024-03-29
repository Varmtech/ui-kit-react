import { ICustomUploader, IProgress } from '../components/ChatContainer';
import { IAttachment } from '../types';
export declare const setCustomUploader: (uploader: any) => void;
export declare const setSendAttachmentsAsSeparateMessages: (asSeparate: boolean) => void;
export declare const getSendAttachmentsAsSeparateMessages: () => boolean;
export declare const getCustomUploader: () => ICustomUploader;
export declare const getCustomDownloader: () => (uri: string, download: boolean, progressCallback?: ((progress: any) => void) | undefined) => Promise<any>;
export declare const customUpload: (attachment: IAttachment, progress: ({ loaded, total }: IProgress) => void, getUpdatedFilePath?: ((newPath: String) => void) | undefined) => Promise<string>;
export declare const pauseUpload: (attachmentId: string) => false | void;
export declare const resumeUpload: (attachmentId: string) => false | void;
export declare const cancelUpload: (attachmentId: string) => void;
