//  /we on our Front End (Client Side) devices
// will be making Request to Servers (back end code)
// and interacting with them through an API

// we will be making Promises
// 



const getBreeds = async () => {
    const dogbreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogbreeds.data.message)
}

getBreeds()


const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

button.addEventListener('click', async () => {
    let breed =breedInput.value
    console.log(breed)
    let response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      )
      console.log(response)
      let dogPic = response.data.message
      imageDiv.innerHTML =`<img src="${dogPic}"/>`
})
