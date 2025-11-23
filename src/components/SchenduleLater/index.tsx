import ButtonNext from '../ButtonNext';
import PickupLaterBar from '../PickupLaterBar';
import current from './../../assets/current.png'
import location from './../../assets/location.png'
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function SchenduleLater() {
    const navigate = useNavigate();

        const handleNextClick = () => {
        navigate('/schedulePage');
        };

    return (
        <>
        <div className= "pickup-later-bar-container">
            <PickupLaterBar />
        </div>
        <div className="search-bar-container">
            <div className="current-container">
                <img src={current} alt="" />
                <input type="text" name="current" id="" placeholder="Current Location" />
            </div>

            <div className="location-container">
                <img src={location} alt="location" />
                <input type="text" name="location" id="" placeholder="Where to?" />
            </div>
            <div className="button-next-container" onClick={() => navigate('/schedulePage')}>
                < ButtonNext />
            </div>
            
        </div>
</>


    );
}
