/// <reference types="react" />
interface IProps {
    channelId: string;
    voicePreviewIcon?: JSX.Element;
    voicePreviewHoverIcon?: JSX.Element;
    voicePreviewTitleColor?: string;
    voicePreviewDateAndTimeColor?: string;
    voicePreviewHoverBackgroundColor?: string;
}
declare const Voices: ({ channelId, voicePreviewIcon, voicePreviewHoverIcon, voicePreviewTitleColor, voicePreviewDateAndTimeColor, voicePreviewHoverBackgroundColor }: IProps) => JSX.Element;
export default Voices;
