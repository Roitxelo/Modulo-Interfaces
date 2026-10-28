const avenger = {
    nome: 'Steve',
    clave: 'Capitán América',
    poder: 'Droga'
}

const extraer = (avenger) => {
    let {nome, clave, poder} = avenger
    console.log(avenger.nome)
    console.log(avenger.clave)
    console.log(avenger.poder)
}

const extraer = (nome, clave, poder) => {
    let {nome, clave, poder} = avenger
    console.log(avenger.nome)
    console.log(avenger.clave)
    console.log(avenger.poder)
}

const avengers
const [thor, ironman, spiderman] = avengers

const [,, spidi] = avengers
console.log(spidi)

const extrarArray = ([t, i, s]) => {
    console.log(t)
    console.log(i)
    console.log(s)
}

var hulk = {
    nombre: 'Hulk',
    smash: function() {
        setTimeout(() => {
            console.log(this.nombre + "smash!!!")
        }, 1000)
    }
}