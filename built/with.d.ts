import { Condition } from './condition';
export declare namespace With {
    function text(text: string): Condition;
    function exactText(exactText: string): Condition;
    function attribute(attributeName: string, attributeValue?: string): Condition;
    function exactAttribute(attributeName: string, attributeValue: string): Condition;
    function value(value: string): Condition;
    function exactValue(value: string): Condition;
    function id(value: string): Condition;
    function exactId(value: string): Condition;
    function name(value: string): Condition;
    function exactName(value: string): Condition;
    function position(index: number): Condition;
    function positionLast(): Condition;
    function count(tag: string, count: number): Condition;
}
