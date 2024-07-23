import React from 'react'
import Product from '../card'
import Product1 from '../images/general1.jpg'
import Product2 from '../images/general2.jpg'
import Product3 from '../images/general3.jpg'

const General = function(){
    return(
        <>
            <header className='header'>
                <h1 className='headertitle'>General Recommendations</h1>
            </header>

            <div className='cardcontainer'>
                <Product image={Product1} name='To Kill a Mockingbird' price='8.89' summary='A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.'/>
                <Product image={Product2} name='Spy School' price='7.19' summary='Like many kids, Ben Ripley imagines life as a secret agent would be pretty awesome -- so when he learns he has been recruited to the C.I.A.s top secret Academy of Espionage, it sounds too good to be true.  And it is.  From the moment he arrives -- and ends up in the middle of an enemy attack -- Ben finds Spy School is going to be far more difficult, dastardly and dangerous than he expected.  Even worse, he soon discovers that he has nott been recruited to become a top agent; instead, he has been brought in as bait to catch a devious double agent.  Now, Ben needs a crash course in espionage so that he can catch the mole, prove his worth -- and get the girl.  It will not be easy, but it will be a very fun -- and very funny -- ride.'/>
                <Product image={Product3} name='Percy Jackson and the Olympians, Book One The Lightning Thief (Percy Jackson & the Olympians)' price='6.90' summary='Percy Jackson is about to be kicked out of boarding school... again. And that is the least of his troubles. Lately, mythological monsters and the gods of Mount Olympus seem to be walking straight out of the pages of Percys Greek mythology textbook and into his life. And worse, he has angered a few of them. Zeus master lightning bolt has been stolen, and Percy is the prime suspect. Now Percy and his friends have just ten days to find and return Zeus stolen property and bring peace to a warring Mount Olympus. But to succeed on his quest, Percy will have to do more than catch the true he must come to terms with the father who abandoned him; solve the riddle of the Oracle, which warns him of betrayal by a friend; and unravel a treachery more powerful than the gods themselves.'/>
            </div>
        </>
    )
}

export default General