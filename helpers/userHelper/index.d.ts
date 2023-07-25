import { IUser } from '../../types';
export declare let hideUserPresence: (user: IUser) => boolean;
export declare const setHideUserPresence: (callback: (user: IUser) => boolean) => void;
export declare const usersMap: {};
export declare const updateUserOnMap: (user: IUser) => void;
export declare const setUserToMap: (user: IUser) => void;
export declare const deleteUserFromMap: (userId: string) => void;
