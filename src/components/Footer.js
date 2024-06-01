import React, { useEffect } from 'react'
import '../css/Footer.css'
import ScrollReveal from 'scrollreveal';

export default function Footer() {

    // useEffect(() => {
    //     ScrollReveal().reveal(".footer", {
    //         origin: "bottom",
    //         duration: 1500,
    //         distance: "200px",
    //         scale: 1,
    //     });
    // }, [])

    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> 
                    </p>
                    
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>email</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>Phone</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="#"> gmail</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> Job<span>name</span></h2>
                    <p className="name"> -------</p>
                </div>
            </footer>
        </div>
    )
}
