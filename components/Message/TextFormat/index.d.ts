/// <reference types="react" />
export default function TextFormat({ handleFormatToBold, handleFormatToItalic, handleFormatToStrikethrough, handleFormatToMonospace, handleClosePopup, isBoldText, isItalicText, isStrikethroughText, isMonospaceText, top, bottom, right, left, theme, editorProps }: {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    isBoldText?: boolean;
    isItalicText?: boolean;
    isStrikethroughText?: boolean;
    isMonospaceText?: boolean;
    isUnderlineText?: boolean;
    handleFormatToBold?: (props?: any) => void;
    handleFormatToItalic?: (props?: any) => void;
    handleFormatToStrikethrough?: (props?: any) => void;
    handleFormatToMonospace?: (props?: any) => void;
    handleClosePopup?: () => void;
    theme?: string;
    editorProps: any;
}): JSX.Element;
