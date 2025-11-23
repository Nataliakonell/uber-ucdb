import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import left from './../../assets/left-chevron.png'
import select from './../../assets/selection.png'
import clock from './../../assets/clock.png'
import calendar from './../../assets/calendar.png'
import Footer from '../Footer';
import PickupLaterHeader from '../PickupLaterHeader';
import './styles.css';

export default function ScheduleAnytime() {
    const [selectedOption, setSelectedOption] = useState<'now' | 'later' | null>(null);
    const navigate = useNavigate();

    const handlePickupLaterClick = () => {
        setSelectedOption('later');
        // Navega após um pequeno delay para dar feedback visual
        setTimeout(() => {
            navigate('/ChoosePickupTime');
        }, 300);
    };

    const handleNowClick = () => {
        setSelectedOption('now');
        // Aqui você pode adicionar navegação para "Now" se necessário
    };

    return (
        <>
            <section>
                <div className="title-schedule">
                    <h2>Schedule it Anytime</h2>
                </div>
                
                <div 
                    className={`schedule-now ${selectedOption === 'now' ? 'selected' : ''}`}
                    onClick={handleNowClick}
                >
                    <img src={clock} alt="now" />
                    <div className="text-content"> 
                        <h3>Now</h3>
                        <p>On-Demand</p>
                    </div>
                    <img src={select} alt="select" />
                </div>
                
                <div 
                    className={`schedule-pickup-later ${selectedOption === 'later' ? 'selected' : ''}`}
                    onClick={handlePickupLaterClick}
                >
                    <img src={calendar} alt="pickup later" />
                    <div className="text-content"> 
                        <h3>Pickup Later</h3>
                        <p>Schedule For a Later Time</p>
                    </div>
                    <img src={select} alt="select" />
                </div>
            </section>
            <Footer />
        </>
    );
}