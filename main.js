function getFirstName(person) {
  return person.firstName;
}

function getLastName(person) {
  return person.lastName;
}

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function setFirstName(person, name) {
  person.firstName = name;
}

function setAge(person, age) {
  person.age = age;
}

function giveBirthday(person) {
  if (person.age !== ''){
    person.age = person.age + 1
  } else {
    person.age = 1
  }
}

function marry(person1, person2) {
}

function divorce(person1, person2) {
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} 