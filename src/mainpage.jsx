import {useEffect, useState } from 'react'
import { apis} from './apis.jsx'

function Clock() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const key = setInterval(() => {
              setCounter(count => count + 1)
            }, 1000);

       return () => {
            clearInterval(key);
       }
    }, [])
    return (
    <>
      <p>{counter} seconds have passed.</p>
    </>
    );
  }
function ScoreTabel({points}){
    return(
        <>
            <h2>Score</h2>
            <h3>Points: {points}</h3>
        </>
    )
} 
function randomArray (oldarr, newar){
    if(oldarr.length < 1) return
    let r = Math.floor(Math.random() * oldarr.length);
    const s = oldarr.splice(r,1) 
    console.log(r)
    console.log(s[0])
    newar.push(s[0])
}

function Mainpage(){ 
        const [x, setX] = useState()
        const [tx , setTX] = useState()
        const [y, setY] = useState()
        const [ty, setTY] = useState()
        const [z, setZ] = useState()
        const [tz, setTZ] = useState()
        const [a, setA] = useState()
        const [ta, setTA] = useState()
        const [err, setErr] = useState()
        const [click, setClick] = useState(false)
        const [ar, setAr] = useState(apis)
        console.log(ar)

        function Click(){
            if(!click){
                setClick(true)
            for( let i = 0; i < 4; i++){
                    randomArray(apis, ar)
            }
                console.log(ar)

            }else{
                setClick(false)
            }
        }
        async function getCats(link, setLinks , setTitles){
            fetch(link,{mode:'cors'})
                    .then (function(response){
                    return response.json()
                })
                .then (function(response){
                     setLinks(response.data.images.original_still.url)
                     setTitles(response.data.title)
                    })
                    .catch(e => {
                        setErr('invalid api key')
                })
            }
    //async function getPokemon(){
    //    const response = await fetch( 'https://pokeapi.co/api/v2/pokemon-color/3/',{mode:'cors'})
    //    const catData = await response.json()
    //    setPoke(catData.url)
    //    console.log(catData)
    //}
useEffect(() => {
        getCats(ar[0].link, setX, setTX)
        getCats(ar[1].link, setY, setTY)
        getCats(ar[2].link, setZ, setTZ)
        getCats(ar[3].link, setA, setTA)
   return () => {
       clearInterval();
   }
}, [click])

    return (
        <>
        <h1>Try a memory game</h1>
        <ScoreTabel/>
        <button onClick={Click} >click</button>
        <div className="error">{err}</div>


        <div className="grid">   
            <div className="item" key={1}>
                <img src={x} width={'250px'} height={'250px'}  alt="" />
                <div className="title">{tx}</div>
            </div>
            <div className="item" key = {2}>
                <img src= {y} width={'250px'} height={'250px'} alt="" />
                <div className="title">{ty}</div>
            </div>
            <div className="item" key={3}>
                <img src= {z} width={'250px'} height={'250px'} alt="" />
                <div className="title">{tz}</div>
            </div>
            <div className="item" key={4}>
                <img src= {a} width={'250px'} height={'250px'} alt="" />
                <div className="title">{ta}</div>
            </div>
        </div>
        </>
    )
}
export {Mainpage, Clock}