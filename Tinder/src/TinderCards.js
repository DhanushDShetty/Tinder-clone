import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
    const [people, state] = useState([
        {
            name: 'Elon Musk',
            url:'https://img.etimg.com/thumb/msid-82246180,width-650,imgsize-70670,,resizemode-4,quality-100/saturday-night-live-elon-musk.jpg',
        },
        {
            name: 'Jeff Bezos',
            url:'https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e',
        },
    ]);

const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
};    

const outOfFrame = (name) => {
    console.log(name + "left the screen");
};    
    
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
              <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up","down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}>

                  <div
                  style={{backgroundImage: `url(${person.url})`}}
                  className="card">
                      <h3>{person.name}</h3>
                  </div>
              </TinderCard>
          ))}  
            </div>
          
        </div>
    )
}

export default TinderCards
