/// <reference types="react" />
import { IMember } from '../../../types';
interface IMentionsPopupProps {
    channelId: string;
    theme?: string;
    addMentionMember: (member: IMember) => void;
    handleMentionsPopupClose: (setPending?: boolean, withoutLastChar?: boolean) => void;
    searchMention: string;
}
export default function MentionMembersPopup({ channelId, theme, addMentionMember, handleMentionsPopupClose, searchMention }: IMentionsPopupProps): JSX.Element;
export declare const MembersList: import("styled-components").StyledComponent<"ul", any, {
    ref?: any;
}, never>;
export declare const MemberItem: import("styled-components").StyledComponent<"li", any, {
    isActiveItem?: boolean | undefined;
    activeBackgroundColor?: string | undefined;
}, never>;
export {};
