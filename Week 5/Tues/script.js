const data = {
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "phone": {
    "home": "555-1234",
    "work": "555-5678"
  },
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  },
  "education": [
    {
      "degree": "Bachelor's",
      "major": "Computer Science",
      "school": "University of California, Berkeley",
      "year": 2014
    },
    {
      "degree": "Master's",
      "major": "Information Technology",
      "school": "Stanford University",
      "year": 2016
    }
  ]
}

console.log(data)
console.log('Name:', data.name);


console.log('Age:', data.age);
console.log('Email:', data.email);
console.log('Home Phone:', data.phone.home);
console.log('Work Phone:', data.phone.work);
console.log('Street Address:', data.address.street);
console.log('City:', data.address.city);
console.log('State:', data.address.state);
console.log('Zip Code:', data.address.zip);
console.log('Degree:', data.education[1].degree);
