/// <reference types="react" />
import { IMember } from '../../../types';
interface IMentionsPopupProps {
    channelId: string;
    theme?: string;
    addMentionMember: (member: IMember) => void;
    handleMentionsPopupClose: (setPending?: boolean) => void;
    searchMention: string;
}
export default function MentionMembersPopup({ channelId, theme, addMentionMember, handleMentionsPopupClose, searchMention }: IMentionsPopupProps): JSX.Element;
export {};
