function randomString() {
    const stringLength = 16
    let str = ''
    while (str.length < stringLength) {
        str += Math.random().toString(36).substring(2)
    }
    return str
}

module.exports = randomString
