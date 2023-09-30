/// <reference types="react" />
import { ElementNode, RangeSelection, TextNode } from 'lexical';
declare type Func = () => void;
export declare function mergeRegister(...func: Array<Func>): () => void;
export declare function getDOMRangeRect(nativeSelection: Selection, rootElement: HTMLElement): DOMRect;
export declare function setFloatingElemPosition(targetRect: DOMRect | null, floatingElem: HTMLElement, anchorElem: HTMLElement, verticalGap?: number, horizontalOffset?: number): void;
export declare function getSelectedNode(selection: RangeSelection): TextNode | ElementNode;
export default function FloatingTextFormatToolbarPlugin({ anchorElem }: {
    anchorElem?: HTMLElement;
}): JSX.Element | null;
export {};
