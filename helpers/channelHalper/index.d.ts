/// <reference types="react" />
import { IChannel } from '../../types';
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
