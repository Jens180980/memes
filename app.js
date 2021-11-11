//Import
import {
  fetchApi
} from './helpers.js'

//Makes data availible
async function releaseMemes() {
  const data = await fetchApi("https://api.imgflip.com/get_memes")
  for (let i = 0; i < data.data.memes.length; i++) {

    const wrap = document.createElement('div')
    const img = document.createElement('img')
    const title = document.createElement('h3')
    img.src = data.data.memes[i].url
    title.innerHTML = data.data.memes[i].name
    wrap.append(img, title)
    main.append(wrap)
  }
}
releaseMemes()