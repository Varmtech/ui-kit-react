/// <reference types="react" />
interface IProps {
    onChange: (e: any) => void;
    state: boolean;
    index: any;
    checkedBorder?: string;
    border?: string;
    tickColor?: string;
    borderRadius?: string;
    size?: string;
}
declare const CustomRadio: ({ index, state, onChange, checkedBorder, border, borderRadius, size }: IProps) => JSX.Element;
export default CustomRadio;
