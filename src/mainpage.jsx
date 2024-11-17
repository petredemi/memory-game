import {useEffect, useState, useRef } from 'react'
import { apis} from './apis.jsx'

function ScoreTabel({points}){
    return(
        <>
            <h3 className='points'>Points: {points}</h3>
        </>
    )
} 
function randomArray (oldarr, newar){
    if(oldarr.length < 1) return
    let r = Math.floor(Math.random() * oldarr.length);
    const s = oldarr.splice(r,1) 
 //   console.log(s[0])
    newar.push(s[0])
    console.log(newar)
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
        const [points, setPoints] = useState(0)
        const [clikeditem, setClickeditem] = useState([])
        const inputRef0 = useRef(null);
        const inputRef1 = useRef(null);
        const inputRef2 = useRef(null);
        const inputRef3 = useRef(null);
        const  Click = () => {
            if(!click){
                setClick(true)
                    for( let i = 0; i < 4; i++){
                    randomArray(apis, ar)
                    }
                    console.log(clikeditem)
                    setClick(false)
            }else{
                setClick(false)
            }
        }
        function Clicka(refx){
            let r = refx.current.textContent
            let includes = clikeditem.includes(r)
            if(includes == false){
                clikeditem.push(r)
                setPoints(points + 1)
            }else if(includes == true){
                setPoints(0)
                setClickeditem([])
            }     
      //      Click()   
        }
        const Click0 = () => {
            Clicka(inputRef0)
            Click()
        }
        const Click1 = () => {
            Clicka(inputRef1)
            Click()
        }
        const Click2 = () => {
            Clicka(inputRef2)
            Click()
        }
        const Click3 = () => {
            Clicka(inputRef3)
            Click()
        }
        async function getCats(link, setLinks , setTitles){
            fetch(link,{mode:'cors'})
                    .then (function(response){
                    return response.json()
                })
                .then (function(response){
                     setLinks(response.data.images.original_still.url)
                     setTitles(response.data.title);
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
}, [points])

    return (
        <>
        <div className="mem-logo">
            <h2>Try a memory game</h2>
        </div>
        <ScoreTabel points={points}/>
        <div className="error">{err}</div>
        <div className="grid">   
            <div className="item" key= {0} onClick={Click0}>
                <img src={x} alt="" />
                <div className="title"></div>
                <div className="name" ref={inputRef0} style={{backgroundColor:'lightgreen'}} >{ar[0].name}</div>
            </div>
            <div className="item" key = '1' onClick={Click1}>
                <img src= {y} alt="" />
                <div className="title"></div>
                <div className="name" style={{backgroundColor:'lightblue'}} ref={inputRef1} >{ar[1].name}</div>
            </div>
            <div className="item" key= '2' onClick={Click2}>
                <img src= {z} alt="" />
                <div className="title"></div>
                <div className="name" ref={inputRef2} style={{backgroundColor:'lightyellow'}} >{ar[2].name}</div>
            </div>
            <div className="item" key='3' onClick={Click3}>
                <img src= {a}  alt="" />
                <div className="title"></div>
                <div className="name"ref={inputRef3}  style={{backgroundColor:'lightorange'}}>{ar[3].name}</div>
            </div>
        </div>
        </>
    )
}
export {Mainpage}