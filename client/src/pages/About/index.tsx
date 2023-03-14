import Header from '../components/Header';
import ContactUs from './components/ContactUs';
import Founder from './components/Founder';
import Welcome from './components/Welcome';

const text = {
    row1: "Conveniently located in Pipka, PK. We're a full-service animal hospital",
    row2: "Providing a wide range of services for all kind of animals.",
    row3: ""
}

export default function Home() {
    return (
        <>
            <Header headerBg="werzk-luuuuuuu-tDlo2ZPlQlU-unsplash.jpg" text={text}/>

            <Welcome />
            <ContactUs />
            <Founder />
        </>
    )
}
