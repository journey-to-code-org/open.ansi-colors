export interface ColorOptions { enabled?: boolean; }
export const styles: readonly string[];
export function ansi(open:number, close:number, value:string):string;
export function color(name:string, value:unknown, options?:ColorOptions):string;
export function red(value:unknown, options?:ColorOptions):string;
export function green(value:unknown, options?:ColorOptions):string;
export function yellow(value:unknown, options?:ColorOptions):string;
export function blue(value:unknown, options?:ColorOptions):string;
export function cyan(value:unknown, options?:ColorOptions):string;
export function magenta(value:unknown, options?:ColorOptions):string;
export function gray(value:unknown, options?:ColorOptions):string;
export function bold(value:unknown, options?:ColorOptions):string;
export function underline(value:unknown, options?:ColorOptions):string;

