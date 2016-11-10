export declare class Store {
    private _key;
    private _localStorage;
    private _window;
    constructor(_key: string, _localStorage?: Storage, _window?: Window);
    private static _instance;
    static readonly Instance: any;
    private _items;
    items: Array<any>;
    get: (options: {
        name: string;
    }) => any;
    put: (options: {
        name: string;
        value: string;
    }) => void;
    clear: () => void;
}
