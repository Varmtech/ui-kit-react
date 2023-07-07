/// <reference types="react" />
interface ICreateChannelPopup {
    handleClose: () => void;
    channelType: string;
    theme?: string;
    uriPrefixOnCreateChannel?: string;
    uploadPhotoIcon?: JSX.Element;
    channelTypeRequiredFieldsMap?: {
        [key: string]: {
            subject?: boolean;
            description?: boolean;
            uri?: boolean;
            members?: boolean;
        };
    };
    showSubject?: boolean;
    showDescription?: boolean;
    showUri?: boolean;
    showUploadAvatar?: boolean;
    withoutConfig?: boolean;
}
export default function CreateChannel({ handleClose, channelType, theme, uriPrefixOnCreateChannel, channelTypeRequiredFieldsMap, uploadPhotoIcon, showSubject, showDescription, showUri, showUploadAvatar, withoutConfig }: ICreateChannelPopup): JSX.Element;
export declare const URILabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export {};
