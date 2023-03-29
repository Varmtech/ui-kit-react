/// <reference types="react" />
import { IMember } from '../../../types';
interface IMentionsPopupProps {
    channelId: string;
    addMentionMember: (member: IMember) => void;
    handleMentionsPopupClose: () => void;
    searchMention: string;
}
export default function MentionMembersPopup({ channelId, addMentionMember, handleMentionsPopupClose, searchMention }: IMentionsPopupProps): JSX.Element;
export {};
