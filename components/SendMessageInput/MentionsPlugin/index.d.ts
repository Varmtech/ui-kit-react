/// <reference types="react" />
import { MenuOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { IContactsMap, IMember } from '../../../types';
export declare class MentionTypeaheadOption extends MenuOption {
    id: string;
    name: string;
    presence?: any;
    avatarUrl?: string;
    constructor(name: string, id: string, presence?: any, avatarUrl?: string);
}
export default function MentionsPlugin({ contactsMap, userId, getFromContacts, setMentionMember, setMentionsIsOpen, members }: {
    contactsMap: IContactsMap;
    userId: string;
    getFromContacts?: boolean;
    setMentionMember: (member: any) => void;
    setMentionsIsOpen: (state: boolean) => void;
    members: IMember[];
}): JSX.Element | null;
export declare const MentionsContainerWrapper: import("styled-components").StyledComponent<"div", any, {
    mentionsIsOpen?: boolean | undefined;
    ref?: any;
}, never>;
export declare const MemberItem: import("styled-components").StyledComponent<"li", any, {
    isActiveItem?: boolean | undefined;
    activeBackgroundColor?: string | undefined;
}, never>;
