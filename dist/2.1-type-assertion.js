"use strict";
{
    //  Type Assertion
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted Value is : ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram("5000");
    const result2 = kgToGram(3000);
    console.log(result1, result2);
    try {
        // try condition
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
