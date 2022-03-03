import React, {useState} from "react";
import memesData from "../memesData";
function Meme() {
    const [url, setUrl]=useState("")
    function getMemeImage(e)
    {
        e.preventDefault()
        let items=memesData.data.memes
        var item = items[Math.floor(Math.random()*items.length)];
        setUrl(item.url)
    }
    return (  
        <div className="container">
            <form className="meme-form">
                <div className="inputs">
                    <input type="text" name="text-1" placeholder="Top text"/>
                    <span className="space"></span>
                    <input type="text" name="text-2" placeholder="Bottom text"/>
                </div>
                <button  onClick={getMemeImage}>Get a new meme image 📷</button>
                <img src={url} alt="" className="meme" />
            </form>
        </div>
       
    );
}

export default Meme;