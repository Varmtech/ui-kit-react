import { IAction, IContact, IRole } from '../../types';
export interface IUserStore {
    connectionStatus: string;
    contactList: IContact[];
    rolesMap: {
        [key: string]: IRole;
    };
    contactsMap: {
        [key: string]: IContact;
    };
}
declare const _default: (state: IUserStore | undefined, { type, payload }: IAction) => IUserStore;
export default _default;
