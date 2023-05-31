import { PageStrategy } from '..';
import type { FileHandler, FindPages } from '../types.doc';
export declare class DefaultPageStrategy extends PageStrategy {
    constructor(opts?: {
        extraFindPages?: FindPages;
        fileHandler?: FileHandler;
    });
}
/**
 * The defaultFileHandler return the result to caller,
 * instead of directly setting the pageData object.
 * so that it is more useful to users.
 */
export declare const defaultFileHandler: FileHandler;
/**
 * turn `sub-path/page2/index.tsx` into `/sub-path/page2`
 */
export declare function getPagePublicPath(relativePageFilePath: string): string;
//# sourceMappingURL=index.d.ts.map