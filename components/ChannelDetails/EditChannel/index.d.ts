/// <reference types="react" />
import { IChannel } from '../../../types';
interface IProps {
    channel: IChannel;
    theme?: string;
    handleToggleEditMode: (state: boolean) => void;
    editChannelSaveButtonBackgroundColor?: string;
    editChannelSaveButtonTextColor?: string;
    editChannelCancelButtonBackgroundColor?: string;
    editChannelCancelButtonTextColor?: string;
}
declare const EditChannel: ({ channel, theme, handleToggleEditMode, editChannelSaveButtonBackgroundColor, editChannelSaveButtonTextColor, editChannelCancelButtonBackgroundColor, editChannelCancelButtonTextColor }: IProps) => JSX.Element;
export default EditChannel;
