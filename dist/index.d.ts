export declare function useKeyUp(key: TAvailableKeys | string, onKeyUp: TOnKeyUp): void;
declare type TOnKeyUp = (keyboardEvent: KeyboardEvent) => void;
declare type TAvailableKeys = "esc" | "enter";
export {};
