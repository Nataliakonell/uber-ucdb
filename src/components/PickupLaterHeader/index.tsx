
import './styles.css'
import left from './../../assets/left-chevron.png'

export default function PickupLaterHeader() {
    return (
        <div className="page-title">
            <img src={left} alt="left" />
            <h2>Schedule a Transport</h2> 
        </div>
    );
}