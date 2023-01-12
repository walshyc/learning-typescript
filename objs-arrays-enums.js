var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Conor',
    age: 32,
    hobbies: ['sports', 'reading'],
    role: Role.AUTHOR,
};
//person.role.push('admin');
// person.role[1] = 10; NOT ALLOWED
//person.role = [1, 'conor'];
let favActivities;
favActivities = ['sports'];
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role == Role.AUTHOR) {
    console.log('is admin');
    console.log(person.role);
}
