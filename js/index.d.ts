declare let lookupMapping: {
    [status: string]: number;
};
export declare function lookup(status: string, defaultCode?: number): number;
export { lookupMapping };
