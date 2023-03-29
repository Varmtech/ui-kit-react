/// <reference types="react" />
interface IReactionsPopupProps {
    messageId: string;
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
export default function ReactionsPopup({ messageId, handleReactionsPopupClose, bottomPosition, horizontalPositions, reactionScores, rtlDirection }: IReactionsPopupProps): JSX.Element;
export {};
