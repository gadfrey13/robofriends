import React from 'react';
import Card from './Card'

//This are pure function
const CardList = (props) =>{
    const {robots} = props;
    const cardComponent = robots.map((user,i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email}/>;
    })
    return(
        <div>
         {cardComponent}
        </div>
    );
}

export default CardList;

