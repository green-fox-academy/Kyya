const trees = [
    { type :"oak", leftColor :"green", age: "120", sex: "female"},
    { type :"oak", leftColor :"green", age: "100", sex: "male"},
    { type :"pine", leftColor :"yellow", age: "50", sex: "male"},
    { type :"oak", leftColor :"green", age: "70", sex: "female"},
    { type :"pine", leftColor :"green", age: "60", sex: "male"}
]

class Tree {
    constructor(type, leftColor, age, sex) {
        this.type = type
        this.leftColor = leftColor
        this.age = age
        this.sex = sex
    }
}

const list = trees.map(tree=>{
    return new Tree(tree.type, tree.leftColor, tree.age, tree.sex)
})
console.log(list)
