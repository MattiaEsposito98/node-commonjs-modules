function persona (firstName, lastName) {
  const user = { 
    name: firstName,
    surname: lastName
  }
  return user
}

console.log (persona('Mattia','Esposito'))


module.exports = persona