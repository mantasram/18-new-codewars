String.prototype.toAlternatingCase = function () {
    return this.toString().split('')
        .map(l => l.match(/[a-z]/) ? l.toUpperCase() : l.toLowerCase())
        .join('');
}


test("Tests", () => {
expect("hello world".toAlternatingCase()).toBe ("HELLO WORLD");
expect("HELLO WORLD".toAlternatingCase()).toBe ("hello world");
expect("hello WORLD".toAlternatingCase()).toBe ("HELLO world");
expect("HeLLo WoRLD".toAlternatingCase()).toBe ("hEllO wOrld");
expect("12345".toAlternatingCase()).toBe ("12345");
expect("1a2b3c4d5e".toAlternatingCase()).toBe ("1A2B3C4D5E");
expect("String.prototype.toAlternatingCase".toAlternatingCase()).toBe ("sTRING.PROTOTYPE.TOaLTERNATINGcASE");
expect("Hello World".toAlternatingCase().toAlternatingCase()).toBe ("Hello World");
})