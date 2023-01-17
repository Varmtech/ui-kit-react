/// <reference types="react" />
import { IAttachment } from '../../../../types';
interface IProps {
    file: IAttachment;
    voicePreviewIcon?: JSX.Element;
    voicePreviewHoverIcon?: JSX.Element;
    voicePreviewTitleColor?: string;
    voicePreviewDateAndTimeColor?: string;
    voicePreviewHoverBackgroundColor?: string;
}
declare const VoiceItem: ({ file, voicePreviewIcon, voicePreviewHoverIcon, voicePreviewTitleColor, voicePreviewDateAndTimeColor, voicePreviewHoverBackgroundColor }: IProps) => JSX.Element;
export default VoiceItem;
