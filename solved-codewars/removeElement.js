function removeEveryOther(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}
test("Tests", () => {
    expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toBe (['Hello', 'Hello Again']);
    expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe ([1, 3, 5, 7, 9]);
    expect(removeEveryOther([[1, 2]])).toBe ([[1, 2]]);
    expect(removeEveryOther([['Goodbye'], { 'Great': 'Job' }])).toBe ([['Goodbye']]);
})