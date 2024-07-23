import React from 'react'
import Product from '../card'
import Product1 from '../images/personal1.jpg'
import Product2 from '../images/personal2.jpg'
import Product3 from '../images/personal3.jpg'

const Personal = function(){
    return(
        <>
            <header className='header'>
                <h1 className='headertitle'>Personal Recommendations</h1>
            </header>

            <div className='cardcontainer'>
                <Product image={Product1} name='Do Androids Dream of Electric Sheep?' price='7.48' summary='By 2021, the World War has killed millions, driving entire species into extinction and sending mankind off-planet. Those who remain covet any living creature, and for people who can’t afford one, companies built incredibly realistic simulacra: horses, birds, cats, sheep. They’ve even built humans. Immigrants to Mars receive androids so sophisticated they are indistinguishable from true men or women. Fearful of the havoc these artificial humans can wreak, the government bans them from Earth. Driven into hiding, unauthorized androids live among human beings, undetected. Rick Deckard, an officially sanctioned bounty hunter, is commissioned to find rogue androids and “retire” them. But when cornered, androids fight back—with lethal force.'/>
                <Product image={Product2} name='Notes from the Underground' price='8.99' summary='One of the most remarkable characters in literature, the unnamed narrator of Dostoevskys most revolutionary novel is a former official who has defiantly withdrawn into an underground existence. In full retreat from society, he scrawls a passionate, obsessive, self-contradictory narrative that serves as a devastating attack on social utopianism and an assertion of mans essentially irrational nature.'/>
                <Product image={Product3} name='Door into Summer' price='13.95' summary='When Dan Davis is crossed in love and stabbed in the back by his business associates, the immediate future does nott look too bright for him and Pete, his independent-minded tomcat. Suddenly, the lure of suspended animation, the Long Sleep, becomes irresistible and Dan wakes up 30 years later in the 21st century, a time very much to his liking.

                The discovery that the robot household appliances he invented have been mass produced is no surprise, but the realization that, far from having been stolen from him, they have, mysteriously, been patented in his name is. There is only one thing for it. Dan somehow has to travel back in time to investigate.

                He may even find Pete...and the girl he really loves.'/>
            </div>

        </>
    )
}

export default Personal