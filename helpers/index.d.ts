/// <reference types="react" />
import { IAttachment, IContact, IUser } from '../types';
export declare const messageStatusIcon: (messageStatus: string, messageStatusDisplayingType: string, iconColor?: string | undefined, readIconColor?: string | undefined) => JSX.Element;
export declare const urlRegex: RegExp;
export declare const bytesToSize: (bytes: number, decimals?: number) => string;
export declare const systemMessageUserName: (contact: IContact, userId: string, mentionedUsers?: IUser[] | undefined) => string;
export declare const setDownloadFilePromise: (attachmentId: string, promise: any) => void;
export declare const downloadFile: (attachment: IAttachment, download: boolean, done?: ((attachmentId: string, failed?: boolean | undefined) => void) | undefined, progressCallback?: ((progress: {
    loaded: number;
    total: number;
}) => void) | undefined) => Promise<void>;
export declare const cancelDownloadFile: (attachmentId: string) => void;
export declare const calculateRenderedImageWidth: (width: number, height: number, maxWidth?: number | undefined, maxHeight?: number | undefined) => number[];
export declare const userLastActiveDateFormat: (date: Date) => string;
export declare const checkArraysEqual: (arr1: any[], arr2: any[]) => boolean;
export declare const getMetadataFromUrl: (url: string) => Promise<any>;
export declare const formatAudioVideoTime: (currentTime: number) => string;
export declare const formatLargeText: (text: string, maxLength: number) => any;
export declare const getLastTwoChars: (element: any) => any;
export declare const getCaretPosition: (element: any) => number;
export declare const setCursorPosition: (element: any, position: number, isAddMention?: boolean | undefined, attempt?: number | undefined) => void;
export declare const setSelectionRange: (element: any, start: number, end: number, attempt?: number | undefined) => void;
export declare const placeCaretAtEnd: (el: any) => void;
export declare const detectOS: () => string | null;
export declare const detectBrowser: () => string;
export declare const getEmojisCategoryTitle: (categoryKey: string) => string;
export declare const hashString: (str: string) => Promise<string>;
