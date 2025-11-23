import './styles.css';
import home from './../../assets/home.png'
import job from './../../assets/truck.png'
import account from '../../assets/bank.png'
import profile from './../../assets/user.png'

export default function Footer() {
    return (
        <div className="bottom-nav">
            <div className="nav-item active">
                <img src={home} alt="Home" />
                <span>Home</span>
            </div>

            <div className="nav-item">
                <img src={job} alt="Job" />
                <span>Job</span>
            </div>
            <div className="nav-item">
                <img src={account} alt="Account" />
                <span>Account</span>
            </div>
            <div className="nav-item">
                <img src={profile} alt="Profile" />
                <span>Profile</span>
            </div>
        </div>
    );
}
