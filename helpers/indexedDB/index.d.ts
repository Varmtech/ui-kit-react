export declare const setDataToDB: (dbName: string, storeName: string, data: any[], keyPath: string) => void;
export declare const getDataFromDB: (dbName: string, storeName: string, keyPath: string, keyPatName?: string | undefined) => Promise<any>;
