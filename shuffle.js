// shuffle array
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex

    // white there reamin elements to shuffle...
    while (0 !== currentIndex) {
        // pick a remaining element...
        randomIndex = getRandomInt(currentIndex)
        currentIndex--

        // and swap it with the current element
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}
