import { __console__ } from '.';
export declare const consolly: ({ showTimestamp, showSource, position, zIndex, debug, }?: {
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
     * The side to which the console will be attached.
     * 'auto' - It will be at the bottom or right, depending on the aspect ratio of the screen.
     * @default 'auto'
     */
    position?: "auto" | "top" | "left" | "bottom" | "right" | undefined;
    /**
     * z-index
     * @default 100_000_000
     */
    zIndex?: number | undefined;
    /**
     * Duplicate to the original console.
     * @default true
     */
    debug?: boolean | undefined;
}) => ReturnType<typeof wrapper>;
export declare type TypeConsollyProps = Required<NonNullable<Parameters<typeof consolly>[0]>>;
export declare type TypeConsoleMethods = keyof typeof __console__;
declare const wrapper: (_props: any) => Console;
export {};
