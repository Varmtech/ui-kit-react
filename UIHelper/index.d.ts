export declare function md5(inputString: string): string;
export declare const BKDRHash: (str: string) => number;
export declare const hashCode: (str: string) => number;
export declare const GlobalStyles: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare function generateAvatarColor(itemName: any): string | null;
export declare const DropdownOptionsUl: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const DropdownOptionLi: import("styled-components").StyledComponent<"li", any, {
    textColor?: string | undefined;
    hoverBackground?: string | undefined;
    iconWidth?: string | undefined;
    iconColor?: string | undefined;
    margin?: string | undefined;
}, never>;
export declare const CustomSelect: import("styled-components").StyledComponent<"div", any, {
    isError?: boolean | undefined;
    minWidth?: string | undefined;
    maxWidth?: string | undefined;
    marginTop?: string | undefined;
    backgroundColor?: string | undefined;
    color?: string | undefined;
}, never>;
export declare const CustomSelectTrigger: import("styled-components").StyledComponent<"span", any, {
    color?: string | undefined;
}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, {
    color?: string | undefined;
}, never>;
export declare const UploadFile: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const UploadFileLabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const InputErrorMessage: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const CustomInput: import("styled-components").StyledComponent<"input", any, {
    error?: boolean | undefined;
    theme?: string | undefined;
    color?: string | undefined;
}, never>;
export declare const FilterField: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FilterFieldSpan: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const CustomRadioWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CustomRadio: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const Row: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const Button: import("styled-components").StyledComponent<"button", any, {
    color?: string | undefined;
    backgroundColor?: string | undefined;
    borderRadius?: string | undefined;
    disabled?: boolean | undefined;
    margin?: string | undefined;
}, never>;
export declare const PopupName: import("styled-components").StyledComponent<"h3", any, {
    marginTop?: string | undefined;
    marginBottom?: string | undefined;
    padding?: string | undefined;
    isDelete?: boolean | undefined;
    color?: string | undefined;
}, never>;
export declare const ButtonBlock: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const Popup: import("styled-components").StyledComponent<"div", any, {
    minWidth?: string | undefined;
    maxWidth?: string | undefined;
    maxHeight?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    display?: string | undefined;
    padding?: string | undefined;
    backgroundColor?: string | undefined;
    boxShadow?: string | undefined;
    isLoading?: boolean | undefined;
}, never>;
export declare const PopupBody: import("styled-components").StyledComponent<"div", any, {
    withFooter?: boolean | undefined;
    paddingH?: string | undefined;
    paddingV?: string | undefined;
}, never>;
export declare const PopupDescription: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const BoltText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const PopupFooter: import("styled-components").StyledComponent<"div", any, any, never>;
export declare const SectionHeader: import("styled-components").StyledComponent<"h4", any, {
    color?: string | undefined;
    margin?: string | undefined;
    theme?: string | undefined;
    uppercase?: boolean | undefined;
}, never>;
export declare const ItemNote: import("styled-components").StyledComponent<"div", any, {
    direction: string;
}, never>;
export declare const CustomSwitcher: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SwitcherLabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const UploadAvatarButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const UploadAvatarHandler: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MentionedUser: import("styled-components").StyledComponent<"span", any, {
    color?: string | undefined;
    isLastMessage?: boolean | undefined;
}, never>;
export declare const MessageOwner: import("styled-components").StyledComponent<"h3", any, {
    color?: string | undefined;
    rtlDirection?: boolean | undefined;
    fontSize?: string | undefined;
    clickable?: boolean | undefined;
}, never>;
export declare const MessageText: import("styled-components").StyledComponent<"pre", any, {
    fontFamily?: string | undefined;
    color?: string | undefined;
    withAttachment?: boolean | undefined;
    fontSize?: string | undefined;
    lineHeight?: string | undefined;
    showMessageSenderName?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
    withMediaAttachment?: boolean | undefined;
    isForwarded?: boolean | undefined;
    withPaddings?: boolean | undefined;
}, never>;
export declare const ReplyMessageText: import("styled-components").StyledComponent<"span", any, {
    withAttachment?: boolean | undefined;
    fontSize?: string | undefined;
    lineHeight?: string | undefined;
    showMessageSenderName?: boolean | undefined;
}, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<any, any, object, string | number | symbol>;
export declare const ClearTypedText: import("styled-components").StyledComponent<any, any, object, string | number | symbol>;
export declare const StyledSearchSvg: import("styled-components").StyledComponent<any, any, object, string | number | symbol>;
export declare const SubTitle: import("styled-components").StyledComponent<"span", any, {
    color?: string | undefined;
    margin?: string | undefined;
}, never>;
export declare const AttachmentIconCont: import("styled-components").StyledComponent<"span", any, {
    backgroundColor?: string | undefined;
}, never>;
export declare const UploadingIcon: import("styled-components").StyledComponent<"span", any, {
    width?: string | undefined;
    height?: string | undefined;
    color?: string | undefined;
    borderWidth?: string | undefined;
    fileAttachment?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
}, never>;
export declare const TextInOneLine: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const CancelResumeWrapper: import("styled-components").StyledComponent<"span", any, {
    isRepliedMessage?: boolean | undefined;
    onClick?: any;
}, never>;
export declare const UploadPercent: import("styled-components").StyledComponent<"span", any, {
    fileAttachment?: boolean | undefined;
    isDetailsView?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
    borderRadius?: string | undefined;
    backgroundColor?: string | undefined;
}, never>;
export declare const UploadProgress: import("styled-components").StyledComponent<"div", any, {
    positionStatic?: boolean | undefined;
    isFailedAttachment?: boolean | undefined;
    whiteBackground?: boolean | undefined;
    fileAttachment?: boolean | undefined;
    withPrefix?: boolean | undefined;
    isRepliedMessage?: boolean | undefined;
    onClick?: any;
    backgroundImage?: string | undefined;
    borderRadius?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    withBorder?: boolean | undefined;
    isDetailsView?: boolean | undefined;
    backgroundColor?: string | undefined;
    imageMinWidth?: string | undefined;
    zIndex?: number | undefined;
}, never>;
export declare const AttachmentPreviewTitle: import("styled-components").StyledComponent<"span", any, {
    color?: string | undefined;
}, never>;
