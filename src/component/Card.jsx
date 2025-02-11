import './Card.css'

function Card({name,pic,dis,status}) {
    return(
        <>
            <div className="card-child">
        <div className="dinemic-img">
            <img className='trisum-pic' src={pic} alt="" />
        </div>
        <div className="text-tor">{name}</div>
        <div className="text-pera">
{dis}
        </div>
        <div className="icon-tor">
            <div className="icon-div"><i className="fa-brands fa-facebook" style={{ color: "#145bd7" }} />
            </div>
            <div className="icon-div"><i className="fa-brands fa-instagram" style={{ color: "red" }} />
            </div>
            <div className="icon-div"><i className="fa-brands fa-youtube" style={{ color: "#df0c0c" }} />
            </div>
            <div className="icon-div"><i className="fa-brands fa-whatsapp" style={{ color: "#1bb11d" }} />
            </div>

        </div>

        
        <div className="btn">
        {status ? 
                         <button onClick={()=>onAddToCart(name,dis)}>book visit</button>
                    :
                    <button  className='b'>booking full</button>
                    }
            
            </div>
    </div>
  

        </>
    )
}
export default Card