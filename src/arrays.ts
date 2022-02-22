/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let out = numbers.filter(
        (element: number, index: number) =>
            index === 0 || index === numbers.length - 1
    );
    if (numbers.length === 1) {
        out = [...out, numbers[0]];
    }
    return out;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const out = numbers.map((num: number): number => num * 3);
    return out;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const out = numbers.map((str: string): number =>
        isNaN(parseInt(str, 10)) ? 0 : parseInt(str, 10)
    );
    return out;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const temp = amounts.map((str: string): string =>
        str.startsWith("$") ? str.substring(1) : str
    );
    const out = temp.map((str: string): number =>
        isNaN(parseInt(str, 10)) ? 0 : parseInt(str, 10)
    );
    return out;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const temp = messages.map((str: string): string =>
        str.endsWith("!") ? str.toUpperCase() : str
    );
    const out = temp.filter((str: string): boolean => !str.endsWith("?"));
    return out;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const temp = words.filter((value: string) => value.length < 4);
    return temp.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num
    );
    const out = sum.toString() + "=" + addends.join("+");
    return out;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        return [0];
    }
    let negIndex = values.length;
    const negValues = values.filter((value: number): boolean => value < 0);
    if (negValues.length === 0) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num
        );
        return [...values, sum];
    }
    negIndex = values.findIndex(
        (value: number): boolean => value === negValues[0]
    );
    const beforeNeg = values.filter(
        (value: number, index: number): boolean => index < negIndex
    );
    let sum = 0;
    if (beforeNeg.length > 0) {
        sum = beforeNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num
        );
    }
    const out = [...values];
    out.splice(negIndex + 1, 0, sum);
    return out;
}
