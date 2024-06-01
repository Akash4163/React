import React, { useEffect } from 'react'
import "../../css/MainPage/Welcome.css"
import ScrollReveal from 'scrollreveal'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


import { toast } from 'react-toastify'

export default function Welcome() {



    useEffect(()=>{
        ScrollReveal().reveal(".headingMain",{
            scale: 0.7,
            duration: 1500
        })
    },[])

    return (
        <div className='welcome'>
            <div class="container text-center mt-5">
                <div className='row'>
                    <div class='col-sm-10 col-md-10 col-lg-5 text-start headingMain'>
                        <div className='text-start mt-5 mb-4'>
                            <div className='display-4 pt-md-5 pt-lg-5 fw-bold text-primary '>Find  Apply  Get.</div>
                        </div>

                        <div className='mt-2 fs-5 text-muted '>
                            <span>Embark on your career journey with Job Nexus, your one-stop destination for finding the perfect job match.</span>
                        </div>
                        <div className='mt-5 '>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
