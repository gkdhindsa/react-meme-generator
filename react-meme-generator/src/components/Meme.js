function Meme() {
    return (  
        <div className="container">
            <form className="meme-form">
                <div className="inputs">
                    <input type="text" name="text-1" placeholder="type here..."/>
                    <input type="text" name="text-2" placeholder="type here..."/>
                </div>
                <button type="submit">Get a new meme image 📷</button>
            </form>
        </div>
       
    );
}

export default Meme;