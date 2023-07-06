import React from 'react';
import './Section02.css';

function Section02() {
return (
<section className='Sec02'>
    <div className="container">
        <div className="row">
            <div className='col-md-12'>
                <img src={require('.//img/globe.png')} alt="" />
                <h1>About Us</h1>
                <p>Global Transcendence Solutions was founded to provide business development, procurement consultant and Services, Manufacturer Representation, Sales Representative, and Project Management solutions with an entrepreneurial approach to finding solutions at Global and Local levels. We look to partner with Global and US domestic customers to develop long-term strategies to ensure profitable growth with complete customer satisfaction.</p>
            </div>
            <div class="col-md-5 aboutusimage">
                    <img src={require('.//img/aboutus.png')} alt="" />
                </div>
                <div class="col-md-7">
                    <p>With over 25 years of experience, Global Transcendence Solutions (GTS) has access to North America’s leading manufacturers in a variety of industries, whether you are trying to sell individual products and need a Manufacturer’s Representative or provide full turn-key solutions, we can support your demands and deliver extraordinary service, perfect quality, transparency, and accountability.</p>
                    <p>We believe that GTS has the following advantages that set us a apart from the Competition. </p>
                </div>
        </div>
    </div>
</section>
);
}

export default Section02;
