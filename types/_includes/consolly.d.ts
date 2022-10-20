export declare type TypeConsollySettings = Required<NonNullable<Parameters<typeof consolly>[0]>>;
export declare type TypeMainProps = {
    setup: TypeConsollySettings;
    queue: Function[];
    count: {
        [key: string]: number;
    };
    timer: {
        [key: string]: number;
    };
    cheat: Record<typeof CONSOLE_DEFAULTS[number], (...a: any[]) => void>;
};
declare const CONSOLE_DEFAULTS: readonly ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "timeStamp", "trace", "warn"];
export declare const consolly: ({ showTimestamp, showSource, position, fontSize, zIndex, width, height, debug, }?: {
    /**
     * Show timestamp.
     * @default true
     */
    showTimestamp?: boolean | undefined;
    /**
     * Show source file name.
     * @default true
     */
    showSource?: boolean | undefined;
    /**
     * The side to which the consolly will be attached.
     * 'auto' - It will be at the bottom or right, depending on the aspect ratio of the screen.
     * @default 'auto'
     */
    position?: "top" | "left" | "right" | "bottom" | "auto" | undefined;
    /**
     * font-size (px)
     * @default 12
     */
    fontSize?: number | undefined;
    /**
     * z-index
     * @default 100_000_000
     */
    zIndex?: number | undefined;
    /**
     * width
     * @default window.innerWidth / 3
     */
    width?: number | undefined;
    /**
     * height
     * @default window.innerHeight / 3
     */
    height?: number | undefined;
    /**
     * Duplicate to the original Console.
     * @default true
     */
    debug?: boolean | undefined;
}) => Console;
export {};
