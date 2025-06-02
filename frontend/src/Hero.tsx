import './Hero.css'
import Recenttrips from './Recenttrips'

export default function Hero(){
    return(
        <div className="Hero">
            <div className='Hero1'></div>
            <div className='Hero2'></div>
            <div className='Hero3'>
                <Recenttrips/>
            </div>
        </div>
    )
}

