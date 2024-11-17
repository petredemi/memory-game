import {useEffect, useState } from 'react'


let giphykey = 'JrzwgUUBqtzCmoUGiwLp6bwmPYYpScjh'
const apis = [
    { 
        imgId: 0,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=scoby doo`,
        name: 'dog'
    },
    {
        imgId: 1,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=tom&jery`,
        name: 'cat'
    },
    {
        imgId: 2,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${giphykey}&s=pink panter`,
        name: 'panter'
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