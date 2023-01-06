import "./style.css";

export function ItemListContainer(greeting){
    const img = 'https://i.postimg.cc/wBb533x4/logo.jpg';
    return(
        
            <div className="container1">
                <h1 className="welcome">{greeting.title}</h1>
                <img className="img1" src={img} alt="" />
            </div>
        
    )
}