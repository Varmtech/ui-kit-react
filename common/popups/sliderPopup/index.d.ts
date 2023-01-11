/// <reference types="react" />
import { IMedia } from '../../../types';
interface IProps {
    setIsSliderOpen: (state: any) => void;
    mediaFiles: IMedia[];
    currentMediaFile: IMedia;
}
declare const SliderPopup: ({ setIsSliderOpen, mediaFiles, currentMediaFile }: IProps) => JSX.Element;
export default SliderPopup;
