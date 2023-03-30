/// <reference types="react" />
import { IAttachment, IContact, IContactsMap, IMessage, IUser } from '../types';
export declare const messageStatusIcon: (messageStatus: string, iconColor?: string | undefined, readIconColor?: string | undefined) => JSX.Element;
export declare const isAlphanumeric: (str: string) => boolean;
export declare const getFileExtension: (filename: string) => string | undefined;
export declare const MessageTextFormatForEdit: ({ text, message }: {
    text: string;
    message: any;
}) => string;
export declare const urlRegex: RegExp;
export declare const MessageTextFormat: ({ text, message, contactsMap, getFromContacts, isLastMessage }: {
    text: string;
    message: any;
    contactsMap: IContactsMap;
    getFromContacts: boolean;
    isLastMessage?: boolean | undefined;
}) => any;
export declare const bytesToSize: (bytes: number, decimals?: number) => string;
export declare const setMessageTypeByAttachment: (attachmentType: string) => "media" | "file";
export declare const getAttachmentType: (dataName: string) => string;
export declare const doesTextHasLink: (text: string) => any[];
export declare const makeUserName: (contact?: IContact | undefined, user?: IUser | undefined, fromContact?: boolean | undefined) => string;
export declare const systemMessageUserName: (contact: IContact, userId: string) => string;
export declare const getLinkTitle: (link: string) => string;
export declare const getAttachmentsAndLinksFromMessages: (messages: IMessage[], messageType: string) => any[];
export declare const downloadFile: (attachment: IAttachment) => Promise<void>;
export declare const calculateRenderedImageWidth: (width: number, height: number) => number[];
export declare const lastMessageDateFormat: (date: Date) => string;
export declare const userLastActiveDateFormat: (date: Date) => string;
export declare const checkArraysEqual: (arr1: any[], arr2: any[]) => boolean;
export declare const getMetadataFromUrl: (url: string) => Promise<any>;
export declare const formatAudioVideoTime: (duration: number, currentTime: number) => string;
export declare const formatLargeText: (text: string, maxLength: number) => any;
export declare const getCaretPosition1: (element: any) => number;
export declare const getCaretPosition: (editableDiv: any) => number;
export declare const setCursorPosition: (element: any, position: number) => void;
export declare const placeCaretAtEnd: (el: any) => void;
export declare const detectOS: () => string | null;
export declare const detectBrowser: () => string | undefined;
export declare const getEmojisCategoryTitle: (categoryKey: string) => string;
