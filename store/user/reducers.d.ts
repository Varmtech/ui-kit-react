import { IAction, IContact, IUser } from '../../types';
export interface IUserStore {
    connectionStatus: string;
    contactList: IContact[];
    usersList: IUser[];
    usersLoadingState: number | null;
    contactsMap: {
        [key: string]: IContact;
    };
    updatedUserMap: {
        [key: string]: IUser;
    };
    user: IUser;
    browserTabIsActive: boolean;
}
declare const _default: (state: IUserStore | undefined, { type, payload }: IAction) => IUserStore;
export default _default;
