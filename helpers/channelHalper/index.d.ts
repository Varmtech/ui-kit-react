/// <reference types="react" />
import { IChannel } from '../../types';
declare type channelTypesMemberDisplayTextMap = {
    [key: string]: string;
};
declare type defaultRolesByChannelTypesMap = {
    [key: string]: string;
};
declare let channelTypesMemberDisplayTextMap: channelTypesMemberDisplayTextMap;
declare let defaultRolesByChannelTypesMap: defaultRolesByChannelTypesMap;
export declare function setChannelInMap(channel: IChannel): void;
export declare function setActiveChannelId(id: string): void;
export declare function getActiveChannelId(): string;
export declare function setChannelsInMap(channels: IChannel[]): {
    channels: any;
    channelsForUpdateLastReactionMessage: IChannel[];
};
export declare function getChannelFromMap(channelId: string): IChannel;
export declare function getLastChannelFromMap(): IChannel;
export declare function removeChannelFromMap(channelId: string): void;
export declare function checkChannelExists(channelId: string): boolean;
export declare function destroyChannelsMap(): void;
export declare const query: any;
export declare function getUnreadScrollTo(): boolean;
export declare function setUnreadScrollTo(state: boolean): void;
export declare function getUploadImageIcon(): JSX.Element;
export declare function setUploadImageIcon(icon: JSX.Element): void;
export declare function getChannelTypesMemberDisplayTextMap(): channelTypesMemberDisplayTextMap;
export declare function setChannelTypesMemberDisplayTextMap(map: channelTypesMemberDisplayTextMap): void;
export declare function getDefaultRolesByChannelTypesMap(): defaultRolesByChannelTypesMap;
export declare function setDefaultRolesByChannelTypesMap(map: channelTypesMemberDisplayTextMap): void;
export {};
