import { IAttachmentMeta } from './messagesHalper';
export declare function resizeImage(file: any, maxWidth?: number, maxHeight?: number, quality?: number): Promise<unknown>;
export declare function getFileSize(url: string): number;
export declare function createFileImageThumbnail(file: any): Promise<unknown>;
export declare function createImageThumbnail(file: any, path?: string, maxWidth?: number, maxHeight?: number): Promise<IAttachmentMeta>;
export declare function getImageSize(path?: any): Promise<any>;
export declare function calculateSize(width: number, height: number, maxWidth: number, maxHeight: number): number[];
