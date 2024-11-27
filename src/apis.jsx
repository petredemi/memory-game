import {useEffect, useState } from 'react'


const memo1 = 'JrzwgUUBqtzCmoUGiwLp6bwmPYYpScjh'
const memo2 = 'TqoGl1hSToxwY19F0kLvBcMK1hoQfvae'
const memo3 = 'm47luGyccSJ6r6KhqqEyA5ka4qS6Cg20'
const memo4 = 'ZCEnArLfY7WCLDOnb5J33XuAhAv1y1eB'
const memo5 = 'PplNwMt0cKFCjv2kM9XNbAcaovx2SHHQ'
const memo6 = '9uJSeQ7HU5yWn4IMYOWFqhv5qW3ghHZV'

const apis = [
    { 
        imgId: 0,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${memo1}&s=scoby doo`,
        name: 'scoby doo'
    },
    {
        imgId: 1,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${memo2}&s=tom&jery`,
        name: 'tom & jery'
    },
    {
        imgId: 2,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${memo3}&s=pink panter`,
        name: 'pink panter'
    },
    {
        imgId: 3,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${memo4}&s=popeye the sailor`,
        name: 'popeye'
    },
    {
        imgId: 4,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${memo5}&s=pinocchio`,
        name: 'pinocchio'
    },
    {
        imgId: 5,
        link: `https://api.giphy.com/v1/gifs/translate?api_key=${memo6}&s=bugs bunny`,
        name: 'bugs bunny'
    }

]
const quotes = [
  //  'https://pokeapi.co/api/v2/pokemon/ditto',
    'https://hindi-quotes.vercel.app/random'

]
const pokemon = [
    'https://pokeapi.co/api/v2/pokemon/8/'

]
export {apis,quotes}