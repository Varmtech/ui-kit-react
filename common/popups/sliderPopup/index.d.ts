/// <reference types="react" />
import { IChannel, IMedia } from '../../../types';
interface IProps {
    channel: IChannel;
    setIsSliderOpen: (state: any) => void;
    mediaFiles?: IMedia[];
    currentMediaFile: IMedia;
    allowEditDeleteIncomingMessage?: boolean;
}
declare const SliderPopup: ({ channel, setIsSliderOpen, mediaFiles, currentMediaFile, allowEditDeleteIncomingMessage }: IProps) => JSX.Element;
export default SliderPopup;
