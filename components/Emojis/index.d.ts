/// <reference types="react" />
declare function EmojisPopup({ handleAddEmoji, handleEmojiPopupToggle, rightSide }: {
    handleAddEmoji: (selectedEmoji: string) => void;
    handleEmojiPopupToggle?: (state: boolean) => void;
    rightSide?: boolean;
}): JSX.Element;
export default EmojisPopup;
