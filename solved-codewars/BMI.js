function bmi(weight, height) {

var bmi = weight / height / height
  
if (bmi <= 18.5) {
        return "Underweight";
    }
   else {
        if (bmi <= 25) return "Normal";
        if (bmi <= 30) return "Overweight";
        if (bmi > 30) return "Obese";

    }

}

test("Tests", () => {
expect(bmi(80, 1.80)).toBe("Normal");
  })