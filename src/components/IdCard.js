import React from 'react'
import "./styles.css"

const IdCard = (props) => {
  const { firstName, lastName, gender, height, picture } = props;
  return (
    <div className='IdCard-Main'>
        <img src={picture} alt="imagen"/>
        <div className='IdCard-Info'>
            <p><strong>First name:</strong>{firstName}</p>
            <p><strong>Last name:</strong>{lastName}</p>
            <p><strong>Gender:</strong>{gender}</p>
            <p><strong>Height:</strong>{height}</p>
            <p><strong>Birth:</strong>{props.birth.toDateString()}</p>
        </div>
    
    </div>
  )
}

export default IdCard;