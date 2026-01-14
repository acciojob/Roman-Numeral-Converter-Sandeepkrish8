function convertToRoman(num) {
  num = Number(num); // 🔥 IMPORTANT FIX (string → number)

  if (num === 0) return "";

  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let i = 0; i < symbols.length; i++) {
    while (num >= symbols[i][1]) {
      result += symbols[i][0];
      num -= symbols[i][1];
    }
  }

  return result;
}


// DO NOT change anything below
function main() {
    const num = +document.getElementById("number-input").value;
    const ans = convertToRoman(num);
    document.getElementById("ans").innerText = ans;
}
