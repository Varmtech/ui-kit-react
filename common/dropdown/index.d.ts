/// <reference types="react" />
interface IProps {
    trigger: JSX.Element;
    position?: string;
    withIcon?: boolean;
    iconColor?: string;
    isStatic?: boolean;
    forceClose?: boolean;
    isSelect?: boolean;
    dropDownState?: boolean;
    order?: number;
    margin?: string;
    watchToggleState?: (state: boolean) => void;
    height?: string;
    children?: JSX.Element | JSX.Element[];
    theme?: string;
}
declare const DropDown: ({ trigger, position, withIcon, iconColor, margin, isStatic, forceClose, isSelect, dropDownState, watchToggleState, height, children, theme, order }: IProps) => JSX.Element;
export default DropDown;
