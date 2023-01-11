/// <reference types="react" />
interface IProps {
    title: string;
    description: string;
    buttonText: string;
    togglePopup: () => void;
    deleteFunction: (option?: any) => void;
    loading?: boolean;
    isDeleteMessage?: boolean;
}
declare function DeletePopup({ title, description, buttonText, togglePopup, deleteFunction, isDeleteMessage, loading }: IProps): JSX.Element;
export default DeletePopup;
