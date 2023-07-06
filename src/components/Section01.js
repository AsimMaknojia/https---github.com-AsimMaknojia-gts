import React from 'react';
import './Section01.css';
import background from "./img/sec01b.png";

function Section01() {
return (
<section className='Sec01'>
    <div className="container">
        <div className="row">
            <div className='col-md-6'>
                <h1>Solutions</h1>
                <h3>Global Transcendence</h3>
                <h2>01</h2>
                <h4>Global Transcendence Solutions</h4>
                <h4>- A Business Development Company</h4>
                <h5>Where can we help find a solution for you?</h5>
                <div className='icon-list'>
                    <ul>
                        <li><img src={require('.//img/tick.png')} alt="" />Business Development and Advisors</li>
                        <li><img src={require('.//img/tick.png')} alt="" />Sales and Project Management Solutions</li>
                        <li><img src={require('.//img/tick.png')} alt="" />Sales Processes and Representation</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-6 sec01bback' style={{ backgroundImage: `url(${background})` }}>
                
            </div>
        </div>
    </div>
</section>
);
}

export default Section01;
