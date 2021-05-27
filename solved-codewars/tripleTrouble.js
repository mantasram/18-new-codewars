function tripleTrouble(one, two, three) {
    let newString = [];
    for (let i = 0; i < one.length; i++) {
        newString.push(one[i]);
        newString.push(two[i]);
        newString.push(three[i]);
    }
    return newString.join('')
}


test("test", () => {
expect(tripleTrouble("this", "test", "lock")).toBe("ttlheoiscstk");
expect(tripleTrouble("aa", "bb", "cc")).toBe("abcabc");
expect(tripleTrouble("Bm", "aa", "tn")).toBe("Batman");
expect(tripleTrouble("LLh", "euo", "xtr")).toBe("LexLuthor");
})