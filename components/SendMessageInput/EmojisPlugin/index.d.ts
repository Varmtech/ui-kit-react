/// <reference types="react" />
declare function EmojisPopup({ handleAddEmoji, handleEmojiPopupToggle, rtlDirection, rightSide, bottomPosition, emojisContainerBorderRadius, emojisCategoryIconsPosition, fixEmojiCategoriesTitleOnTop, emojisPopupPosition, relativePosition, leftPosition }: {
    handleAddEmoji?: (selectedEmoji: string) => void;
    handleEmojiPopupToggle?: (state: boolean) => void;
    rtlDirection?: boolean;
    rightSide?: boolean;
    relativePosition?: boolean;
    bottomPosition?: string;
    emojisContainerBorderRadius?: string;
    emojisCategoryIconsPosition?: 'top' | 'bottom';
    emojisPopupPosition?: string;
    fixEmojiCategoriesTitleOnTop?: boolean;
    leftPosition?: string;
}): JSX.Element;
export default EmojisPopup;
