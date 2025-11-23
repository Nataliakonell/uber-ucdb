import ButtonNext from '../ButtonNext';
import './styles.css'
export default function ChooseDate() {
    return (
        <>
            <div className="title-page">
                <h1>Choose a Pickup Time</h1>
                <p className="paragraph">Time Shown in EST</p>
            </div>

            <table className="table-representation">
                    <tr>
                        <td className="month">January</td>
                        <td className="day">1</td>
                        <td className="hour">1</td>
                        <td className="period">PM</td>
                    </tr>
                    <tr>
                        <td className="month">February</td>
                        <td className="day">31</td>
                        <td className="hour">12</td>
                        <td className="period">PM</td>
                    </tr>
                       <tr className="active-table">
                        <td className="month">March</td>
                        <td className="day">1</td>
                        <td className="hour">1</td>
                        <td className="period">AM</td>
                    </tr>
                       <tr>
                        <td className="month">April</td>
                        <td className="day">31</td>
                        <td className="hour">12</td>
                        <td className="period">PM</td>
                    </tr>
                       <tr>
                        <td className="month">May</td>
                        <td className="day">31</td>
                        <td className="hour">12</td>
                        <td className="period">PM</td>
                    </tr>
            </table>
            <ButtonNext />
        </>
    );
}