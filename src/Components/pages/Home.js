import React from 'react';

const Home = () => {
    return (
        <div>
        <div className="bg-page">
         <div className="bg-page-overlay">
         <div className="reporting ">
                <h3>Reporting Inc.</h3>
                <p className="details ">It enables every citizen to bring any form of corruption to the notice of appropriate
                    authorities. It is also called the "Whistling blowing web App "</p>
            </div>
        </div>
         <section>
        <h3>Did you know?</h3>
        <p id="quotes">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ipsum quisquam amet minima. Iusto
            alias dolor incidunt possimus veritatis accusamus! Saepe accusamus possimus vel reprehenderit sunt obcaecati
            sit iusto officiis voluptates id, quaerat ipsum autem eius fugit, animi fuga beatae!</p>
        <div className="how-to ">
            <h4>How to use Reporting Inc.</h4>
            <div className="grid-block ">
                <div>
                    <span className="circle ">1</span>
                    <p className="status ">Create an account</p>
                </div>
                <div>
                    <span className="circle ">2</span>
                    <p className="status ">Create a report flag or intervention flag</p>
                </div>
                <div>
                    <span className="circle ">3</span>
                    <p className="status ">View all report flag </p>
                </div>
            </div>
        </div>
    </section>
        </div>
            
        </div>
    )

}

export default Home;