const imagesFile = require('./images.json');

// console.log(imagesFile)
imagesFile.forEach(image => console.log(image.userId))

imagesFile.map((image, index) => {
    let date = new Date()
    const toString = date
    console.log(toString)
    return {...image, date}
})