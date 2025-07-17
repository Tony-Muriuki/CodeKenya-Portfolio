// Null and Undefined

let projectDescription;
console.log(projectDescription); // undefined

const teamMember = {
  name: "Alex",
};
console.log(teamMember.bio); // undefined

let projectImage = null;
console.log(projectImage); // null

const anotherMember = {
  name: "Jordan",
  bio: null,
};
console.log(anotherMember.bio); // null

// Uncomment the next line to see a ReferenceError:
// console.log(nonExistentVariable);
