/// <reference types="react" />
export declare const Container: import("styled-components").StyledComponent<"div", any, any, never>;
interface IProps {
    dividerText: string;
    visibility?: boolean;
    unread?: boolean;
    dateDividerFontSize?: string;
    dateDividerTextColor?: string;
    dateDividerBorder?: string;
    dateDividerBackgroundColor?: string;
    dateDividerBorderRadius?: string;
    systemMessage?: boolean;
    newMessagesSeparatorTextColor?: string;
    newMessagesSeparatorFontSize?: string;
    newMessagesSeparatorWidth?: string;
    newMessagesSeparatorBorder?: string;
    newMessagesSeparatorBorderRadius?: string;
    newMessagesSeparatorBackground?: string;
    newMessagesSeparatorLeftRightSpaceWidth?: string;
}
export default function MessageDivider({ dividerText, visibility, unread, dateDividerFontSize, dateDividerTextColor, dateDividerBorder, dateDividerBackgroundColor, dateDividerBorderRadius, systemMessage, newMessagesSeparatorTextColor, newMessagesSeparatorFontSize, newMessagesSeparatorWidth, newMessagesSeparatorBorder, newMessagesSeparatorBorderRadius, newMessagesSeparatorBackground, newMessagesSeparatorLeftRightSpaceWidth }: IProps): JSX.Element;
export {};
