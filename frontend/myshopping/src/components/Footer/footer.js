import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Footer extends Component {
    render() {
        return (
            <div className='fixed-bottom'>
                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-3">
                                <h4 className="mb-5 mt-0"><Link className="logo" to="index.html"><img src="img/logo-footer.png" alt='' /></Link></h4>
                                <p className="mb-0"><Link className="text-dark" to="#"><i className="mdi mdi-phone" /> +61 525 240 310</Link></p>
                                <p className="mb-0"><Link className="text-dark" to="#"><i className="mdi mdi-cellphone-iphone" /> 12345 67890, 56847-98562</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 
