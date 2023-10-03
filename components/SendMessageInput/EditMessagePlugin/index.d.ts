/// <reference types="react" />
import { IMessage } from '../../../types';
export default function EditMessagePlugin({ editMessage, contactsMap, getFromContacts, setMentionedMember }: {
    editMessage: IMessage;
    contactsMap: any;
    getFromContacts: boolean;
    setMentionedMember: (mentionedMember: any) => void;
}): JSX.Element | null;
