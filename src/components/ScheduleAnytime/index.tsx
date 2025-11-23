import left from './../../assets/left-chevron.png'
import select from './../../assets/selection.png'
import clock from './../../assets/clock.png'
import calendar from './../../assets/calendar.png'
import Footer from '../Footer';
import PickupLaterHeader from '../PickupLaterHeader';

export default function ScheduleAnytime() {
    return (
    
        <section>    <div className="title-schedule">
            <img src={left} alt="" />
            <h2>Schedule it Anytime</h2>
        </div>
            <div className="schedule-now">
                <img src={clock} alt="now" />
                <h3>Now</h3>
                <p>On-Demand</p>
                <img src={select} alt="select" />
            </div>
            <div className="schedule-pickup-later">
                <img src={calendar} alt="pickup later" />
                <h3>Pickup Later</h3>
                <p>On-Demand</p>
                <img src={select} alt="select" />
            </div>
        </section>


    );
}