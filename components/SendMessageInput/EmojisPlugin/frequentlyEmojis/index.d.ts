/// <reference types="react" />
import { IReaction } from '../../../types';
declare function FrequentlyEmojis({ handleAddEmoji, handleEmojiPopupToggle, frequentlyEmojis, rtlDirection }: {
    handleAddEmoji: (selectedEmoji: string) => void;
    handleEmojiPopupToggle: (state: boolean) => void;
    frequentlyEmojis?: IReaction[];
    rtlDirection?: boolean;
}): JSX.Element;
export default FrequentlyEmojis;
