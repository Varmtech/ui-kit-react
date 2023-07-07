/// <reference types="react" />
import { IMember } from '../../../../../types';
interface IProps {
    theme: string;
    channelId: string;
    member: IMember;
    handleClosePopup: () => void;
}
declare const ChangeMemberRole: ({ theme, channelId, member, handleClosePopup }: IProps) => JSX.Element;
export default ChangeMemberRole;
