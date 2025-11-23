import current from './../../assets/current.png'
import location from './../../assets/location.png'
import './styles.css';

export default function SchenduleLater() {
    return (
        <div className="search-bar-container">
            <div className="current-container">
                <img src={current} alt="" />
                <input type="text" name="current" id="" placeholder="Current Location" />
            </div>

            <div className="location-container">
                <img src={location} alt="location" />
                <input type="text" name="location" id="" placeholder="Where to?" />
            </div>
            
            
        </div>



    );
}
