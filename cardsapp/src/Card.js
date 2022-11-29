import React from 'react'
     
const Card = (props) => {  
   
  const detail1 = function detail1(){
    
     alert("merhaba")
  }
   
  return (
    <div className='card'>      
        <div className='cardbody'> 
            <img src={props.img}/>   
            <div className='about'>  
                <h2 className='cardTitle'>{props.title}</h2>
                <p className='description'>{props.description}</p>
            </div>       
         </div>     
         <button onClick={detail1} type="button" class="btn btn-outline-secondary"> Details</button>
    </div>  
    
  )
}

export default Card
 