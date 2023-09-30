/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import { IMessage } from '../../../types';
export default function EditMessagePlugin({ editMessage, contactsMap, getFromContacts, setMentionedMember }: {
    editMessage: IMessage;
    contactsMap: any;
    getFromContacts: boolean;
    setMentionedMember: (mentionedMember: any) => void;
}): JSX.Element | null;
