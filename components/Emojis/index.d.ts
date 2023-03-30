/// <reference types="react" />
declare function EmojisPopup({ handleAddEmoji, handleEmojiPopupToggle, rtlDirection, rightSide, bottomPosition, emojisContainerBorderRadius, emojisCategoryIconsPosition, separateEmojiCategoriesWithTitle, emojisPopupPosition, relativePosition }: {
    handleAddEmoji: (selectedEmoji: string) => void;
    handleEmojiPopupToggle?: (state: boolean) => void;
    rtlDirection?: boolean;
    rightSide?: boolean;
    relativePosition?: boolean;
    bottomPosition?: string;
    emojisContainerBorderRadius?: string;
    emojisCategoryIconsPosition?: 'top' | 'bottom';
    emojisPopupPosition?: string;
    separateEmojiCategoriesWithTitle?: boolean;
}): JSX.Element;
export default EmojisPopup;
