function getDrinkByProfession(str) {

    var text;

    switch (str.toLowerCase()) {
        case "jabroni":
            text = "Patron Tequila";
            break;
        case "school counselor":
            text = "Anything with Alcohol";
            break;
        case "programmer":
            text = "Hipster Craft Beer";
            break;
        case "bike gang member":
            text = "Moonshine";
            break;
        case "politician":
            text = "Your tax dollars";
            break;
        case "rapper":
            text = "Cristal";
            break;
        default:
            text = "Beer";
    }
    return text
    }

test("Tests", () => {
        expect(getDrinkByProfession("jabr0ni")).toBe("Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
/*        expect(getDrinkByProfession("scHOOl counselor")).toBe ("Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
        expect(getDrinkByProfession("prOgramMer")).toBe ("Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
        expect(getDrinkByProfession("bike ganG member")).toBe ("Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
        expect(getDrinkByProfession("poLiTiCian")).toBe ("Your tax dollars", "'Politician' should map to 'Your tax dollars'");
        expect(getDrinkByProfession("rapper")).toBe ("Cristal", "'Rapper' should map to 'Cristal'");
        expect(getDrinkByProfession("pundit")).toBe ("Beer", "'Pundit' should map to 'Beer'");
        expect(getDrinkByProfession("Pug")).toBe ("Beer", "'Pug' should map to 'Beer'");*/

    })