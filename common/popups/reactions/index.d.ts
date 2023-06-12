/// <reference types="react" />
interface IReactionsPopupProps {
    messageId: string;
    handleAddDeleteEmoji: (selectedEmoji: string) => void;
    handleReactionsPopupClose: () => void;
    bottomPosition: number;
    horizontalPositions: {
        left: number;
        right: number;
    };
    reactionScores: {
        [key: string]: number;
    };
    rtlDirection?: boolean;
    reactionsDetailsPopupBorderRadius?: string;
    reactionsDetailsPopupHeaderItemsStyle?: 'bubbles' | 'inline';
}
export default function ReactionsPopup({ messageId, handleReactionsPopupClose, handleAddDeleteEmoji, bottomPosition, reactionScores, reactionsDetailsPopupBorderRadius, reactionsDetailsPopupHeaderItemsStyle, rtlDirection }: IReactionsPopupProps): JSX.Element;
export {};
