import ButtonNext from "../../components/ButtonNext";
import Footer from "../../components/Footer";
import PickupLaterBar from "../../components/PickupLaterBar";
import PickupLaterHeader from "../../components/PickupLaterHeader";
import SchenduleLater from "../../components/SchenduleLater";

export default function PickupLaterPage() {
    return (
        <>
        <PickupLaterHeader />
        <PickupLaterBar />
        <SchenduleLater />
        <ButtonNext />
        <Footer />
        </>
    );
}