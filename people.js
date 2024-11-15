const fnNome = require ('./names')
const fnHobby = require ('./hobbies')


function dateUser () {
  // const {firstName, lastName} = fnNome ('Mattia', 'Esposito') //con destrutturazione
  const people = fnNome('Mattia', 'Esposito')
 

  const {hobbies} = fnHobby('giocare','guardare','leggere')
  const objDataUser = {
    nome: people.name,   //con dot notation
    surname: people.surname, //con dot notation
    hobbies  //con destrutturazione
  }
  return objDataUser
}

console.log ("Nuovo oggetto con dati utente:",dateUser())