import React from 'react';
import MetaTags from '../components/MetaTags';
import BreadCrums from '../components/BreadCrumbs';

const PrivacyPolicy = () => {
    return (
        <>
            <MetaTags title="Privacy Policy | Modern Mart" />
            <BreadCrums page="Privacy Policy" />
            <section className="policy-wrapper">
                <div className="container-xxl py-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy bg-white p-3">
                                <div className="container">
                                    <header class="text-center">
                                        <h1>Privacy Policy</h1>
                                        <p class="lead">Effective Date: [1 Jan, 2024]</p>
                                    </header>

                                    <section>
                                        <h2>Introduction</h2>
                                        <p>Welcome to our Privacy Policy page! When you use our services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.</p>
                                    </section>

                                    <section>
                                        <h2>Information We Collect</h2>
                                        <p>We collect information to provide better services to all our users. We collect information in the following ways:</p>
                                        <ul>
                                            <li><strong>Information you give us:</strong> For example, when you sign up for an account, we'll ask for personal information like your name, email address, and phone number.</li>
                                            <li><strong>Information we get from your use of our services:</strong> We may collect information about the services that you use and how you use them, like when you visit our website or view and interact with our content.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2>How We Use Information</h2>
                                        <p>We use the information we collect for the following purposes:</p>
                                        <ul>
                                            <li>To provide, maintain, protect, and improve our services.</li>
                                            <li>To develop new services.</li>
                                            <li>To protect our company and our users.</li>
                                            <li>To offer you tailored content.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2>Information Sharing</h2>
                                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                                        <ul>
                                            <li>With service providers: We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.</li>
                                            <li>For legal purposes: We may disclose your information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.</li>
                                            <li>With your consent: We may share your information with third parties when you explicitly consent to the disclosure.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2>Data Security</h2>
                                        <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                                    </section>

                                    <section>
                                        <h2>Changes to this Privacy Policy</h2>
                                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                                    </section>

                                    <section>
                                        <h2>Contact Us</h2>
                                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                                        <ul>
                                            <li>Email: modernmart.noreply@gmail.com</li>
                                            <li>Address: No.123, XYZ Mall, Gujarat-987654, India</li>
                                        </ul>
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

export default PrivacyPolicy