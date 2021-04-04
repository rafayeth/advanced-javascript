const students = [

    {id: 21, name: "omoe sami"},
    {id: 31, name: "mannnaaa"},
    {id: 41,name: "dipjol"},
    {id: 70, name: "salman khan"}
]

const name = students.map(s => s.name)
const id = students.map( x => x.id)

const bigger = students.filter( s => s.id > 40)
const biggerOne = students.find( s => s.id > 40)

console.log(biggerOne);