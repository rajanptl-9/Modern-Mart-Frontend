import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const TermsAndConditions = () => {
    return (
        <>
            <MetaTags title="Terms && Conditions | Modern Mart" />
            <BreadCrums page="Terms && Conditions" />
            <section className="policy-wrapper">
                <div className="container-xxl py-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy bg-white p-3">
                                <div class="container">
                                    <header class="text-center">
                                        <h1>Terms and Conditions</h1>
                                        <p class="lead">Effective Date: [1 Jan, 2024]</p>
                                    </header>

                                    <section>
                                        <h2>Introduction</h2>
                                        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
                                    </section>

                                    <section>
                                        <h2>Use of Website</h2>
                                        <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                                    </section>

                                    <section>
                                        <h2>Intellectual Property</h2>
                                        <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
                                    </section>

                                    <section>
                                        <h2>Links to Other Websites</h2>
                                        <p>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>
                                    </section>

                                    <section>
                                        <h2>Limitation of Liability</h2>
                                        <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
                                    </section>

                                    <section>
                                        <h2>Changes to Terms and Conditions</h2>
                                        <p>We may revise these terms and conditions from time to time by updating this page. You should check this page regularly to ensure that you are happy with any changes.</p>
                                    </section>

                                    <footer class="text-center">
                                        <p>&copy; [2024] Modern Mart. All rights reserved.</p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TermsAndConditions;