let result = getLevel(2500, 359)

function getLevel(victories, defeats) {

let ranking = victories - defeats
let level = 'ferro'

if (ranking < 10) {
    level = 'FERRO'
} else if (ranking >= 11 && ranking <= 20) {
    level = 'BRONZE'
} else if (ranking >= 21 && ranking <= 50) {
    level = 'PRATA'
} else if (ranking >= 51 && ranking <= 80) {
    level = 'OURO'
} else if (ranking >= 81 && ranking <= 90) {
    level = 'DIAMANTE'
} else if (ranking >= 91 && ranking <= 100) {
    level = 'LENDÁRIO'
} else {
    level = 'IMORTAL'
} 

console.log('O Herói tem ' + victories + ' de saldo de vitórias e está no nível de ' + level)

return ranking

}

