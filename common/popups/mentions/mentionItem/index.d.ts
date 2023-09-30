/// <reference types="react" />
interface IMentionsPopupProps {
    mention: any;
    isFocused: boolean;
    onMouseUp: (e: any) => void;
    selectMention: (mention: any) => void;
}
export default function MentionMember({ mention, isFocused, ...parentProps }: IMentionsPopupProps): JSX.Element;
export {};
