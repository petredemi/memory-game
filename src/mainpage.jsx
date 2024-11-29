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
    newar.push(s[0])
}
function Mainpage(){ 
        const [x, setX] = useState() // item  image link
        const [tx , setTX] = useState() // item title or id
        const [y, setY] = useState()
        const [ty, setTY] = useState()
        const [z, setZ] = useState()
        const [tz, setTZ] = useState()
        const [a, setA] = useState()
        const [ta, setTA] = useState()
        const [b, setB] = useState()
        const [tb, setTitleB] = useState()
        const [c, setC] = useState()
        const [tc , setTitleC] = useState()
        const [err, setErr] = useState()
        const [click, setClick] = useState(false)
        const [ar, setAr] = useState(apis)
        let text = 'good start, keep going to get points '
        let text1 = 'congratulation you have a good memory'
        const text2 = 'your memory is very good'
        const text3 = 'you hava a brilliant memory';
        const text4 = 'your memory is exceptional'
        let disply = 'none'; //display congratulation message
        const [points, setPoints] = useState(0)
        const [clikeditem, setClickeditem] = useState([])
        if (points == 4){
            disply = 'block';
        }
        if (points == 6){
            text = text1;
            disply = 'block';
        }
        if(points == 9){
            text = text2;
            disply = 'block'
        }
        if(points == 12){
            text = text3;
            disply = 'block'
        }
        if (points == 15){
            text = text4;
            disply = 'block';
        }
        const inputRef0 = useRef(null);
        const inputRef1 = useRef(null);
        const inputRef2 = useRef(null);
        const inputRef3 = useRef(null);
        const inputRef4 = useRef(null);
        const inputRef5 = useRef(null);
        const  Click = () => {
            if(!click){
                setClick(true)
                    for( let i = 0; i < 6; i++){
                    randomArray(apis, ar)
                    }
                    setClick(false)
            }else{
                setClick(false)
            }
        }
        function ClickedItem(refx){
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
            ClickedItem(inputRef0)
            Click()
        }
        const Click1 = () => {
            ClickedItem(inputRef1)
            Click()
        }
        const Click2 = () => {
            ClickedItem(inputRef2)
            Click()
        }
        const Click3 = () => {
            ClickedItem(inputRef3)
            Click()
        }
        const Click4 = () => {
            ClickedItem(inputRef4)
            Click()
        }
        const Click5 = () => {
            ClickedItem(inputRef5)
            Click()
        }
        async function getCats(link, setLinks, setTitles){
            fetch(link,{mode:'cors'})
                    .then (function(response){
                    return response.json()
                })
                .then (function(response){
                     setLinks(response.data.images.original_still.url)
                     let res = response.data.id
                     console.log(res)
                     let txt = response.data.id
                   //  setTitles(response.data.title);
                     setTitles(txt.slice(0,20))
                    })
                    .catch(e => {
                        setErr('API key expired')
                })
            }
//    async function getAnime(){
//        const response = await fetch('https://pokeapi.co/api/v2/version/8/',{mode:'cors'})
//        const catData = await response.json()
//        setAnime(catData.data[8].gif.images.original_still.url)
//        console.log(catData)
//    }
useEffect(() => {
      getCats(ar[0].link, setX, setTX)
      getCats(ar[1].link, setY, setTY)
      getCats(ar[2].link, setZ, setTZ)
      getCats(ar[3].link, setA, setTA)
      getCats(ar[4].link, setB, setTitleB)
      getCats(ar[5].link, setC, setTitleC)


   return () => {
       clearInterval();
   }
}, [points])

    return (
        <>
        <div className="mem-logo">
            <h3>Test your memory</h3>
            <p>touch any picture only once to get points, remember don't touch
                second time the same picture.
            </p>
        </div>
        <ScoreTabel points={points}/>
        <div className="error">{err}</div>
        <div className="congrats" style={{display: disply}}>{text}</div>
        <div className="grid" >   
            <div className="item" key= {0} onClick={Click0}>
                <img src={x} alt="" />
                <div className="title"  ref={inputRef0} >{tx}</div>
                <div className="name"  style={{backgroundColor:'lightgreen'}} >{ar[0].name}</div>
            </div>
            <div className="item" key = '1' onClick={Click1}>
                <img src= {y} alt="" />
                <div className="title" ref={inputRef1}>{ty}</div>
                <div className="name" style={{backgroundColor:'lightblue'}}  >{ar[1].name}</div>
            </div>
            <div className="item" key= '2' onClick={Click2}>
                <img src= {z} alt="" />
                <div className="title"  ref={inputRef2}>{tz}</div>
                <div className="name" style={{backgroundColor:'lightyellow'}} >{ar[2].name}</div>
            </div>
            <div className="item" key='3' onClick={Click3}>
                <img src= {a}  alt="" />
                <div className="title"  ref={inputRef3}>{ta}</div>
                <div className="name"  style={{backgroundColor:'lightorange'}}>{ar[3].name}</div>
            </div>
            <div className="item" key='4' onClick={Click4}>
                <img src= {b}  alt="" />
                <div className="title" ref={inputRef4}>{tb}</div>
                <div className="name"  style={{backgroundColor:'lightorange'}}>{ar[4].name}</div>
            </div>
            <div className="item" key='5' onClick={Click5}>
                <img src= {c}  alt="" />
                <div className="title" ref={inputRef5}>{tc}</div>
                <div className="name"  style={{backgroundColor:'lightorange'}}>{ar[5].name}</div>
            </div>
        </div>
        </>
    )
}
export {Mainpage}