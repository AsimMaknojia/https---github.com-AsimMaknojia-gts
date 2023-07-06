import React from 'react';
import './Header.css';

function Header() {
return (
<section className='Mainheader'>
<div className="container">
    <div className="row">
        <div class="col-md-2 logo p-2 text-start">
            <a href="/"><img src={require('.//img/logoimage.png')} alt="" /></a>
        </div>
        <div class="col-md-8 menucol my-auto p-2">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="/">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Who We Work With</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="col-md-2 my-auto p-2 callbutton">
            <button><img src={require('.//img/telephone.png')} alt="" />248-705-5045</button>
        </div>
        </div>
</div>
</section>

);
}

export default Header;
