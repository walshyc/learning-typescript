enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: 'Conor',
  age: 32,
  hobbies: ['sports', 'reading'],
  role: Role.AUTHOR,
};

//person.role.push('admin');
// person.role[1] = 10; NOT ALLOWED
//person.role = [1, 'conor'];

let favActivities: string[];
favActivities = ['sports'];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.AUTHOR) {
  console.log('is admin');
  console.log(person.role);
}
