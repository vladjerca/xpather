import { Condition } from './condition';
export declare class Xpath {
    static readonly root: Xpath;
    static x(tag: string, ...conditions: Condition[]): Xpath;
    private readonly xpathString;
    constructor(xpathString: string, ...conditions: Condition[]);
    descendant(xpathString: string, ...conditions: Condition[]): Xpath;
    descendantOrSelf(xpathString: string, ...conditions: Condition[]): Xpath;
    child(xpathString: string, ...conditions: Condition[]): Xpath;
    parent(): Xpath;
    following(xpathString: string, ...conditions: Condition[]): Xpath;
    next(xpathString: string, ...conditions: Condition[]): Xpath;
    followingSibling(xpathString: string, ...conditions: Condition[]): Xpath;
    nextSibling(xpathString: string, ...conditions: Condition[]): Xpath;
    preceding(xpathString: string, ...conditions: Condition[]): Xpath;
    previous(xpathString: string, ...conditions: Condition[]): Xpath;
    precedingSibling(xpathString: string, ...conditions: Condition[]): Xpath;
    previousSibling(xpathString: string, ...conditions: Condition[]): Xpath;
    build(): string;
    toString(): string;
}
