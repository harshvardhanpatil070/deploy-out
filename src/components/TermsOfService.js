import React from 'react';

const TermsOfService = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1>Terms and Service</h1>
                

                <h2>1. Introduction</h2>
                <p>Welcome to Andhar Bahar (“we”, “our”, “us”). These Terms and Service (“Terms”) govern your use of our Andhar Bahar game app (“App”). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our App.</p>

                <h2>2. Eligibility</h2>
                <p>You must be at least 18 years old to use our App. By using our App, you represent and warrant that you meet this age requirement.</p>

                <h2>3. Account Registration</h2>
                <p>To access certain features of our App, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.</p>

                <h2>4. Use of the App</h2>
                <h3>4.1 License</h3>
                <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to use our App for personal, non-commercial purposes.</p>

                <h3>4.2 Prohibited Conduct</h3>
                <p>You agree not to:</p>
                <ul>
                    <li>Use our App for any illegal purpose or in violation of any local, state, national, or international law.</li>
                    <li>Post, upload, or distribute any content that is unlawful, defamatory, obscene, offensive, or otherwise objectionable.</li>
                    <li>Interfere with or disrupt the operation of our App or the servers or networks used to make our App available.</li>
                    <li>Engage in any conduct that could damage, disable, or impair the functioning of our App.</li>
                </ul>

                <h2>5. Virtual Goods and Currency</h2>
                <p>Our App may include virtual goods or currency that can be purchased with real money. You acknowledge that you do not own these virtual goods or currency and that you have no rights or title to them outside of the App. All purchases of virtual goods or currency are final and non-refundable.</p>

                <h2>6. Intellectual Property</h2>
                <p>All content, features, and functionality of the App, including but not limited to text, graphics, logos, and software, are the exclusive property of Andhar Bahar or its licensors and are protected by intellectual property laws. You agree not to reproduce, distribute, or create derivative works from any part of the App without our prior written consent.</p>

                <h2>7. Privacy Policy</h2>
                <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>

                <h2>8. Termination</h2>
                <p>We reserve the right to suspend or terminate your account and your access to the App at our sole discretion, without notice and without liability, if you violate these Terms or for any other reason.</p>

                <h2>9. Disclaimer of Warranties</h2>
                <p>Our App is provided “as is” and “as available” without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted or error-free, nor do we make any warranty as to the results that may be obtained from the use of the App.</p>

                <h2>10. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Andhar Bahar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the App; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the App; or (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App by any third party.</p>

                <h2>11. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

                <h2>12. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will provide notice of such changes, such as by sending an email, posting a notice within the App, or updating the “Last Updated” date at the top of these Terms. Your continued use of the App after such changes will constitute your acceptance of the new Terms.</p>

                <h2>13. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at [Contact Information].</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        boxSizing: 'border-box',
    },
    content: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        maxHeight: '90vh',
        overflowY: 'scroll',
        width: '100%',
        maxWidth: '800px',
    }
};

export default TermsOfService;
