class PostIt {
    constructor(text, textColor, backgroundColor) {
        this.backgroundColor = backgroundColor
        this.text = text
        this.textColor = textColor
    }
}

const post1 = new PostIt("Idea 1", "blue", "orange")
console.log(post1)
const post2 = new PostIt("Awesome", "black", "pink")
console.log(post2)
const post3 = new PostIt("Superb!", "green", "yellow")
console.log(post3)
