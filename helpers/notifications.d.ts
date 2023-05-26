import { IChannel, IContactsMap, IUser } from '../types';
export declare const setNotification: (body: string, user: IUser, channel: IChannel, reaction?: string | undefined) => void;
export declare const setNotificationLogoSrc: (src: string) => void;
export declare const setContactsMap: (contacts: IContactsMap) => void;
export declare const setShowNotifications: (show?: boolean | undefined) => void;
export declare const getShowNotifications: () => boolean | undefined;
