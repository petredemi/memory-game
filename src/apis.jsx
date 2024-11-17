import {useEffect, useState } from 'react'


let giphykey = 'PplNwMt0cKFCjv2kM9XNbAcaovx2SHHQ'
const apis = [
    { 
        imgId: 0,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=scoby doo`,
        name: 'scoby doo'
    },
    {
        imgId: 1,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=tom&jery`,
        name: 'tom & jery'
    },
    {
        imgId: 2,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=pink panter`,
        name: 'pink panter'
    },
    {
        imgId: 3,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=popeye the sailor`,
        name: 'popeye'
    }
]
const quotes = [
  //  'https://pokeapi.co/api/v2/pokemon/ditto',
    'https://hindi-quotes.vercel.app/random'

]

export {apis,quotes}