/// <reference types="react" />
interface ICreateChannelPopup {
    handleClose: () => void;
    channelType: string;
    uriPrefixOnCreateChannel?: string;
}
export default function CreateChannel({ handleClose, channelType, uriPrefixOnCreateChannel }: ICreateChannelPopup): JSX.Element;
export declare const URILabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export {};
