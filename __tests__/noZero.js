function noBoringZeros(n) {
    return parseFloat(n)
}


test("Tests", () => {
    expect(noBoringZeros(1450)).toBe(145)
    expect(noBoringZeros(960000)).toBe(96)
    expect(noBoringZeros(1050)).toBe(105)
    expect(noBoringZeros(-1050)).toBe(-105)
    expect(noBoringZeros(-105)).toBe(-105)
    expect(noBoringZeros(0)).toBe(0)
})