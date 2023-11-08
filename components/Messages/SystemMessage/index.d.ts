import React from 'react';
import { IChannel, IMessage } from '../../../types';
interface ISystemMessageProps {
    channel: IChannel;
    message: IMessage;
    nextMessage: IMessage;
    connectionStatus: string;
    contactsMap: {
        [key: string]: any;
    };
    differentUserMessageSpacing?: string;
    fontSize?: string;
    textColor?: string;
    border?: string;
    backgroundColor?: string;
    borderRadius?: string;
    tabIsActive?: boolean;
}
declare const _default: React.MemoExoticComponent<({ message, nextMessage, connectionStatus, channel, tabIsActive, differentUserMessageSpacing, fontSize, textColor, border, backgroundColor, borderRadius, contactsMap }: ISystemMessageProps) => JSX.Element>;
export default _default;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    topOffset?: number | undefined;
    marginTop?: string | undefined;
    marginBottom?: string | undefined;
    visible?: boolean | undefined;
    textColor?: string | undefined;
    backgroundColor?: string | undefined;
    borderRadius?: string | undefined;
    fontSize?: string | undefined;
    border?: string | undefined;
}, never>;
