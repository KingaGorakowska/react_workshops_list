import WorkshopContainer from "../components/workshop-container/WorkshopsContainer";


const HomePage = () => {

    return(
        <main className="container">
            <div className="row">
                <div className="col">
                    <h1>Recommended car workshops</h1>
                    <h2>Looking for a car workshop? Your car, our passion — find the workshop that knows its craft.</h2>
                    <WorkshopContainer/>
                </div>
            </div>
        </main>
    )
}
export default HomePage;