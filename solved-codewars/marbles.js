function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const blue = blueStart - bluePulled;
    const red = redStart - redPulled;

    return blue / (blue + red)
}


test("Tests", () => {
expect(guessBlue(5, 5, 2, 3)).toBe (0.6);
expect(guessBlue(5, 7, 4, 3)).toBe (0.2);
expect(guessBlue(12, 18, 4, 6)).toBe (0.4);
})