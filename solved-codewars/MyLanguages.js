function myLanguages(obj) {
    let result = [];
    for (let i in obj) {
        if (obj[i] > 59) {
            result.push(i);
        }
    }
    return result.sort((a, b) => obj[b] - obj[a]);
}

test("Tests", () => {
    expect(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 })).toStrictEqual(["Ruby", "Python"])
    expect(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 })).toStrictEqual(["Dutch", "Greek", "Hindi"])
    expect(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 })).toStrictEqual([])
})