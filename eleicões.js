var eleitor = 9

if (eleitor <16) {
console.log("não pode votar");
} else if (eleitor >=16 && eleitor <=17) {
console.log ("voto facultativo");
} else if (eleitor >65) {
console.log ("vota se quiser");
} else if (eleitor >= 18 && eleitor <=65) {
console.log ("voto obrigatorio");
}