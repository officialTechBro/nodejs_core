import url from 'url'

const urlString = 'https://www.google.com/search?q=helloworld'

//URL Object
const URLObject = new URL(urlString)
console.log(URLObject)

//format
console.log(url.format(urlString))

//import.meta.url()
console.log(import.meta.url)

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url))

console.log(URLObject.search)

const params = new URLSearchParams(URLObject.searchParams)
console.log(params)
console.log(params.get('q'))
params.append('limit', '5')
params.delete('limit')
