// Create a person object that contains three keys: name, age, and county.
const personInfo = {
  name: 'Illia',
  age: 17,
  country: 'Ukraine'
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData(personObj) {
  return `${personObj.name} is ${personObj.age} old and lives in ${personObj.country}`;
}

// Call the logData() function to verify that it works
console.log(logData(personInfo));