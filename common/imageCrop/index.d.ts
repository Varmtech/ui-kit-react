/// <reference types="react" />
interface IProps {
    image: any;
    onAccept: (file: File) => void;
    handleClosePopup: (cropped?: boolean) => void;
    theme?: string;
}
declare const ImageCrop: ({ theme, image, onAccept, handleClosePopup }: IProps) => JSX.Element;
export default ImageCrop;
