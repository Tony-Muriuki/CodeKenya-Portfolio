const projectCount = 8;
const averageRating = 4.7;
console.log(typeof projectCount); // 'number'
console.log(typeof averageRating); // 'number'

const completedProjects = 5;
const totalProjects = 8;
const projectsLeft = totalProjects - completedProjects;
const doubleProjects = totalProjects * 2;
const halfProjects = totalProjects / 2;
const bonusProjects = totalProjects + 2;

console.log(projectsLeft);
console.log(doubleProjects);
console.log(halfProjects);
console.log(bonusProjects);

const rating = 4.7;
console.log(Math.round(rating));
console.log(Math.floor(rating));
console.log(Math.ceil(rating));
console.log(Math.random());

const badges = 17;
const projects = 5;
const badgesPerProject = Math.floor(badges / projects);
const badgesLeft = badges % projects;
console.log(`Each project gets ${badgesPerProject} badges.`);
console.log(`Badges left over: ${badgesLeft}`);

const squared = 3 ** 2;
const cubed = 2 ** 3;
console.log(squared);
console.log(cubed);

console.log(0.1 + 0.2);
console.log(1 / 0);
console.log(10 / "portfolio");
