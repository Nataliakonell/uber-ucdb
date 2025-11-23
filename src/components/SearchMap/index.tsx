import Footer from '../Footer';
import PickupLaterBar from '../PickupLaterBar';
import './styles.css';
export default function SearchMap() {
    return (



        <section>

            <div className="header-container">

                <h1 className="header-title">iBoxt</h1>
                <h2 className="header-saldo">🏦$120</h2>

            </div>
            <div className="uber-map-search-bar">
                <div className="uber-search-bar">
                    <div className="uber-search-bar-container">
                        <input type="text" name="search" id="" placeholder="🔍 Where go?" />
                        <PickupLaterBar />
                    </div>
                </div>
                <iframe src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.38992901228!2d-54.6214589258798!3d-20.408028981090453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7f91ebf9cf9%3A0xef64075c972d1a78!2sUniversidade%20Cat%C3%B3lica%20Dom%20Bosco!5e0!3m2!1spt-BR!2sbr!4v1763850117134!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
            
            <Footer />


        </section>
    );
}