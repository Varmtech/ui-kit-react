/// <reference types="react" />
interface ICreateChannelPopup {
    handleClose: () => void;
    channelType: 'group' | 'broadcast' | 'direct';
    uriPrefixOnCreateChannel?: string;
    uploadPhotoIcon?: JSX.Element;
}
export default function CreateChannel({ handleClose, channelType, uriPrefixOnCreateChannel, uploadPhotoIcon }: ICreateChannelPopup): JSX.Element;
export declare const URILabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export {};
