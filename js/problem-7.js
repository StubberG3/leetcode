// Problem 7: Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const arr = x.map(String);
    const reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }

    if (reverseArr.includes('-')) {
        reverseArr.unshift(reverseArr.pop());
    }

    const reverseInt = Number(reverseArr.join(''));

    const minRange = (-2) ** 31;
    const maxRange = (2 ** 31) - 1
    if (reverseInt < minRange || reverseInt > maxRange) {
        return 0;
    }
    else {
        return reverseInt;
    }
};