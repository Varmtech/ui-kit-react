import { IAddMember, IMember, IRole, IUser } from '../../types';
export declare function getMembersAC(channelId: string): {
    type: string;
    payload: {
        channelId: string;
    };
};
export declare function setMembersToListAC(members: IMember[]): {
    type: string;
    payload: {
        members: IMember[];
    };
};
export declare function addMembersToListAC(members: IMember[]): {
    type: string;
    payload: {
        members: IMember[];
    };
};
export declare function updateMembersAC(members: IMember[]): {
    type: string;
    payload: {
        members: IMember[];
    };
};
export declare function updateMembersPresenceAC(usersMap: {
    [key: string]: IUser;
}): {
    type: string;
    payload: {
        usersMap: {
            [key: string]: IUser;
        };
    };
};
export declare function loadMoreMembersAC(limit: number): {
    type: string;
    payload: {
        limit: number;
    };
};
export declare function setMembersLoadingStateAC(state: number): {
    type: string;
    payload: {
        state: number;
    };
};
export declare function clearMembersAC(): {
    type: string;
};
export declare function addMembersAC(channelId: string, members: IAddMember[]): {
    type: string;
    payload: {
        channelId: string;
        members: IAddMember[];
    };
};
export declare function kickMemberAC(channelId: string, memberId: string): {
    type: string;
    payload: {
        channelId: string;
        memberId: string;
    };
};
export declare function blockMemberAC(channelId: string, memberId: string): {
    type: string;
    payload: {
        channelId: string;
        memberId: string;
    };
};
export declare function reportUserAC(reportData: any): {
    type: string;
    payload: {
        reportData: any;
    };
};
export declare function removeMemberFromListAC(members: IMember[]): {
    type: string;
    payload: {
        members: IMember[];
    };
};
export declare function getRolesAC(timeout?: number, attempts?: number): {
    type: string;
    payload: {
        timeout: number | undefined;
        attempts: number | undefined;
    };
};
export declare function getRolesFailAC(timeout?: number, attempts?: number): {
    type: string;
    payload: {
        timeout: number | undefined;
        attempts: number | undefined;
    };
};
export declare function getRolesSuccess(roles: IRole[]): {
    type: string;
    payload: {
        roles: IRole[];
    };
};
export declare function changeMemberRoleAC(channelId: string, members: IMember[]): {
    type: string;
    payload: {
        channelId: string;
        members: IMember[];
    };
};
