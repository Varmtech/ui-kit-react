/// <reference types="react" />
import { IAttachment } from '../../../../types';
interface IProps {
    file: IAttachment;
    voicePreviewPlayIcon?: JSX.Element;
    voicePreviewPlayHoverIcon?: JSX.Element;
    voicePreviewPauseIcon?: JSX.Element;
    voicePreviewPauseHoverIcon?: JSX.Element;
    voicePreviewTitleColor?: string;
    voicePreviewDateAndTimeColor?: string;
    voicePreviewHoverBackgroundColor?: string;
}
declare const VoiceItem: ({ file, voicePreviewPlayIcon, voicePreviewPlayHoverIcon, voicePreviewPauseIcon, voicePreviewPauseHoverIcon, voicePreviewTitleColor, voicePreviewDateAndTimeColor, voicePreviewHoverBackgroundColor }: IProps) => JSX.Element;
export default VoiceItem;
