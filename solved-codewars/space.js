function enough(cap, on, wait) {

    const vietos = (on + wait) - cap

    if (on + wait <= cap) {
        return 0
    } else {
        return vietos
}
}


test("Tests", () => {
    expect(enough(10, 5, 5)).toBe (0);
    expect(enough(100, 60, 50)).toBe (10);
    expect(enough(20, 5, 5)).toBe (0);
})