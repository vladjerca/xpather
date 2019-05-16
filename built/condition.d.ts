export declare class Condition {
    private readonly condition;
    constructor(condition: string);
    or(...conditions: Condition[]): Condition;
    and(...conditions: Condition[]): Condition;
    toString(): string;
}
