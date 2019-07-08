export declare function useKeyUp(key: TAvailableKeys | string | number, onKeyUp: TOnKeyUp): void;
declare type TOnKeyUp = (keyboardEvent: KeyboardEvent) => void;
declare type TAvailableKeys = "esc" | "enter";
export {};
