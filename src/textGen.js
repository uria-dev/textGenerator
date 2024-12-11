function randomString() {
    const stringLength = 16
    let str = ''
    while (str.length < stringLength) {
        str += Math.random().toString(36).substring(2)
        if (str.length > 16) {
            str = str.slice(0, stringLength)
        }
    }
    return str
}

module.exports = randomString
