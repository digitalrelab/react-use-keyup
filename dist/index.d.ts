export declare function useKeyUp(targetKey: TAvailableKeys | string, onKeyUp: TOnKeyUp): void;
declare type TOnKeyUp = (keyboardEvent: KeyboardEvent) => void;
declare type TAvailableKeys = "esc" | "enter" | "up" | "down";
export {};
