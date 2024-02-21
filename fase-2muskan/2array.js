const marbleHeros = ["thor", "iron man", "spider man"]
const dc_heros = ["superman", " flash", "batman"]


// marbleHeros.push(dc_heros)


// console.log(marbleHeros);
// console.log(marbleHeros[3][1]);

// const allHeros = marbleHeros.concat(dc_heros)
// console.log(allHeros);

const all_New_Heros = [...dc_heros,  ...marbleHeros]
console.log(all_New_Heros);


const another_arr = [1,2,3,[4,5],7,[3,2,4]]

const real_another_arr =another_arr.flat()

console.log(real_another_arr);






console.log(Array.isArray("vishal"))
console.log(Array.from("vishal"))
console.log(Array.from({name:"vishal"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));















