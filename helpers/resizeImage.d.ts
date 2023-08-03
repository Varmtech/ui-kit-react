import { IAttachmentMeta } from './messagesHalper';
export declare function resizeImage(file: any, maxWidth?: number, maxHeight?: number, quality?: number): Promise<{
    file: File;
    blob: Blob | null;
    newWidth: number;
    newHeight: number;
}>;
export declare function getFileSize(url: string): number;
export declare function createFileImageThumbnail(file: any): Promise<unknown>;
export declare const binaryToBase64: (binary: any) => string;
export declare const base64ToBinary: (base64: any) => Uint8Array;
export declare const base64ToToDataURL: (base64: any) => string;
export declare function createImageThumbnail(file: any, path?: string, maxWidth?: number, maxHeight?: number): Promise<IAttachmentMeta>;
export declare function getImageSize(path?: any): Promise<any>;
export declare function calculateSize(width: number, height: number, maxWidth: number, maxHeight: number): number[];
