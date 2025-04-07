const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

const tempConversion = (c) => {
    return (c * 9) / 5 + 32
}


module.exports = {
    generateRandomNumber,
    tempConversion
}