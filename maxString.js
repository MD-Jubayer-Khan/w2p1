const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let biggestName = friends[0]

for (let i = 0; i < friends.length; i++) {
    const element = friends[i]
    if(element.length > biggestName.length) biggestName = element
}

console.log(biggestName);