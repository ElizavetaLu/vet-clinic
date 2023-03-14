import Header from "../../components/Header";

const text = {
    row1: "Radiography",
    row2: "Radiographs are made using a specialized type of vacuum tube that produces x-rays.",
    row3: ""
  }

export default function Services() {
    return (
        <>
            <Header headerBg="maxresdefault.jpg" text={text}/>
            <section>
                <div className="main-container">
                    <h3>Some section #1</h3>
                </div>
            </section>
            <section>
                <div className="main-container">
                    <h3>Some section #2</h3>
                </div>
            </section>
            <section>
                <div className="main-container">
                    <h3>Some section #3</h3>
                </div>
            </section>
        </>
    )
}