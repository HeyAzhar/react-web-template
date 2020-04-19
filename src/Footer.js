import React from 'react';


const Footer = () => (
  <div>
  <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">2215 John Daniel Drive<br />Clark, MO 65243</p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fab fa-fw fa-facebook-f"></i></a><a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fab fa-fw fa-twitter"></i></a><a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a><a className="btn btn-outline-light btn-social mx-1" href="#"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Aizex Creation</h4>
                        <p className="lead mb-0">Minimal website for any freelancer by <a href="#">Aizex Creation</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
        <section class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © Aizex Creation 2020</small></div>
        </section>
        
        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>
        </div>
);

export default Footer;