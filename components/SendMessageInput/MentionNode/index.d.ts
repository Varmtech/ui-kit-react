import type { Spread, DOMConversionMap, DOMExportOutput, EditorConfig, LexicalNode, NodeKey, SerializedTextNode } from 'lexical';
import { TextNode } from 'lexical';
export declare type SerializedMentionNode = Spread<{
    mentionName: string;
}, SerializedTextNode>;
export declare class MentionNode extends TextNode {
    __mention: any;
    mentionId: string;
    static getType(): string;
    static clone(node: MentionNode): MentionNode;
    static importJSON(serializedNode: SerializedMentionNode): MentionNode;
    constructor(mention: any, text?: string, key?: NodeKey);
    exportJSON(): SerializedMentionNode;
    createDOM(config: EditorConfig): HTMLElement;
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    isTextEntity(): true;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
}
export declare function $createMentionNode(mention: any): MentionNode;
export declare function $isMentionNode(node: LexicalNode | null | undefined): node is MentionNode;
