import { IContact, IRole } from '../../types';
export declare function setConnectionStatusAC(status: string): {
    type: string;
    payload: {
        status: string;
    };
};
export declare function getContactsAC(): {
    type: string;
    payload: {};
};
export declare function setContactsAC(contacts: IContact[]): {
    type: string;
    payload: {
        contacts: IContact[];
    };
};
export declare function getRolesAC(): {
    type: string;
    payload: {};
};
export declare function setRolesAC(roles: IRole[]): {
    type: string;
    payload: {
        roles: IRole[];
    };
};
export declare function blockUserAC(userIds: string[]): {
    type: string;
    payload: {
        userIds: string[];
    };
};
export declare function unblockUserAC(userIds: string[]): {
    type: string;
    payload: {
        userIds: string[];
    };
};
export declare function setContactsLoadingStateAC(status: number): {
    type: string;
    payload: {
        status: number;
    };
};
