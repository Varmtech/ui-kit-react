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
}
declare function ConfirmPopup({ title, description, buttonText, buttonTextColor, buttonBackground, togglePopup, handleFunction, isDeleteMessage, loading }: IProps): JSX.Element;
export default ConfirmPopup;
