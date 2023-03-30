/// <reference types="react" />
declare function FrequentlyEmojis({ handleAddEmoji, handleEmojiPopupToggle }: {
    handleAddEmoji: (selectedEmoji: string) => void;
    handleEmojiPopupToggle: (state: boolean) => void;
    rtlDirection?: boolean;
    rightSide?: boolean;
    relativePosition?: boolean;
    bottomPosition?: string;
    emojisContainerBorderRadius?: string;
    emojisCategoryIconsPosition?: 'top' | 'bottom';
    separateEmojiCategoriesWithTitle?: boolean;
}): JSX.Element;
export default FrequentlyEmojis;
