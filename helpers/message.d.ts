import { IContact, IContactsMap, IUser } from '../types';
export declare const typingTextFormat: ({ text, mentionedMembers, currentMentionEnd }: {
    text: string;
    mentionedMembers: any;
    currentMentionEnd?: number | undefined;
    setEmoji?: any;
}) => any;
export declare const makeUsername: (contact?: IContact | undefined, user?: IUser | undefined, fromContact?: boolean | undefined) => string;
export declare const isJSON: (str: any) => boolean;
export declare const MessageTextFormat: ({ text, message, contactsMap, getFromContacts, isLastMessage, asSampleText }: {
    text: string;
    message: any;
    contactsMap: IContactsMap;
    getFromContacts: boolean;
    isLastMessage?: boolean | undefined;
    asSampleText?: boolean | undefined;
}) => any;
export declare const bytesToSize: (bytes: number, decimals?: number) => string;
export declare const setMessageTypeByAttachment: (attachmentType: string) => "file" | "media";
export declare const getFileExtension: (filename: string) => string | undefined;
export declare const getAttachmentType: (dataName: string) => string;
export declare const lastMessageDateFormat: (date: Date | number) => string;
export declare const getDuplicateMentionsFromMeta: (mentionsMetas: any[], mentionedMembers: any[]) => any[];
