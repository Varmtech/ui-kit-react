/// <reference types="react" />
interface IProps {
    title: string;
    description: string;
    buttonText: string;
    buttonTextColor?: string;
    buttonBackground?: string;
    togglePopup: () => void;
    handleFunction: (option?: any) => void;
    loading?: boolean;
    isDeleteMessage?: boolean;
    isIncomingMessage?: boolean;
    isDirectChannel?: boolean;
    myRole?: string;
}
declare function ConfirmPopup({ title, description, buttonText, buttonTextColor, buttonBackground, togglePopup, handleFunction, isDeleteMessage, isIncomingMessage, isDirectChannel, myRole, loading }: IProps): JSX.Element;
export default ConfirmPopup;
