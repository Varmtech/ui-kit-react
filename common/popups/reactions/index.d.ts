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
}
export default function ReactionsPopup({ messageId, handleReactionsPopupClose, handleAddDeleteEmoji, bottomPosition, reactionScores, rtlDirection }: IReactionsPopupProps): JSX.Element;
export {};
