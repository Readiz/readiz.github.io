import { ts } from 'ts-morph';
export type TsInfo = {
    type: 'object-literal';
    name: string;
    description: string;
    properties: TsPropertyOrMethodInfo[];
} | {
    type: 'interface';
    name: string;
    description: string;
    properties: TsPropertyOrMethodInfo[];
} | {
    type: 'other';
    name: string;
    description: string;
    text: string;
};
export interface TsPropertyOrMethodInfo {
    name: string;
    type: string;
    description: string;
    defaultValue: string | undefined;
    optional: boolean;
}
export declare function collectInterfaceInfo(fileName: string, exportName: string, options?: ts.CompilerOptions): TsInfo;
/**
 * ref:
 *
 * https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
 *
 * https://stackoverflow.com/questions/59838013/how-can-i-use-the-ts-compiler-api-to-find-where-a-variable-was-defined-in-anothe
 *
 * https://stackoverflow.com/questions/60249275/typescript-compiler-api-generate-the-full-properties-arborescence-of-a-type-ide
 *
 * https://stackoverflow.com/questions/47429792/is-it-possible-to-get-comments-as-nodes-in-the-ast-using-the-typescript-compiler
 *
 * Instructions of learning ts compiler:
 * https://stackoverflow.com/a/58885450
 *
 * https://learning-notes.mistermicheels.com/javascript/typescript/compiler-api/
 */
//# sourceMappingURL=extract.d.ts.map