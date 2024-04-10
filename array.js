// const array =[1,2,3,4,5,6,7]
// console.log("A",array);
// const newarr = array.slice(1,4)
// console.log(newarr); //expected 2,3,4
// console.log("B",array);
// const newarr2 = array.splice(1,4,)
// console.log(newarr2);
// console.log("C",array);

// const marvel_hero = new Array("spiderman", "thor", "captain_america",)
// const dc_hero = new Array("batman", "superman", "wonderwomen",)
// console.log(marvel_hero);
// console.log(dc_hero);
// marvel_hero.push(dc_hero);
// const all_hero = marvel_hero.concat(dc_hero);
// const all_new_hero = [...marvel_hero, ...dc_hero]

// console.log(all_new_hero);

const biwan =[1,2,3,4,[5,6,],7,[8,9,[10,11,[12,13,[14,15]]]]]
const real_biwan = biwan.flat(Infinity)
console.log(real_biwan);