import "./FullPage.css"
const FullPage = ()=>{

    
    return(
        <div className="main">

        <div className="firstimg">
            <img style={{width:'100%',height:"100%"}} src="https://www.kindmeal.my/photos/moment/24/24581-47607-l.jpg" alt="" />
        </div>

<div className="alldetails">
<div className="profile">
    <img style={{width:'100%',height:"100%"}} src="https://www.kindmeal.my/photos/member/22/22038-m.jpg" alt="" />
</div>
<div className="namefollwer">
    <h1>Pawan</h1> <span>0 fOLLwer</span>
</div>

<div className="follwerbtn">
    <button>Like</button> <span>Follow</span>
</div>
</div>

<div className="bigimg">
    <div className="longimg">
        <div className="Input"></div>
        <div className="Input"></div>
    </div>


    <div className="rowimg">
        <div className="llong"></div>
        <div className="llong"></div>
        <div className="llong"></div>
        <div className="llong"></div>
    </div>
</div >





        </div>
    )
}

export default FullPage