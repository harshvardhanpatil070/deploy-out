import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1>Privacy Policy</h1>
               

                <h2>1. Introduction</h2>
                <p>Welcome to Andhar Bahar (“we”, “our”, “us”). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our Andhar Bahar game app (“App”). By accessing or using our App, you agree to this Privacy Policy. If you do not agree with this Privacy Policy, do not use our App.</p>

                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information</h3>
                <p>When you register for an account, we may collect personal information such as your name, email address, and other contact information.</p>

                <h3>2.2 Usage Information</h3>
                <p>We may collect information about your use of the App, including but not limited to your IP address, device information, browser type, and usage data.</p>

                <h3>2.3 Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to track the activity on our App and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our App.</p>

                <h2>3. How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our App</li>
                    <li>Improve, personalize, and expand our App</li>
                    <li>Understand and analyze how you use our App</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the App, and for marketing and promotional purposes</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our App</li>
                    <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities, and protect the rights and property of Andhar Bahar and others</li>
                    <li>Comply with legal obligations and resolve any disputes</li>
                </ul>

                <h2>4. Sharing Your Information</h2>
                <p>We may share your information with third parties in the following ways:</p>
                <ul>
                    <li>With service providers who need access to such information to carry out work on our behalf (e.g., hosting services)</li>
                    <li>With analytics and search engine providers that assist us in the improvement and optimization of our App</li>
                    <li>If required by law or if we believe that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request</li>
                    <li>With your consent or at your direction</li>
                </ul>

                <h2>5. Security of Your Information</h2>
                <p>We take reasonable measures to protect the information we collect from unauthorized access, use, and disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure, so we cannot guarantee absolute security.</p>

                <h2>6. Children's Privacy</h2>
                <p>Our App is not intended for children under the age of 18. We do not knowingly collect personal information from children under the age of 18. If we learn that we have collected personal information from a child under the age of 18 without parental consent, we will take steps to delete that information as soon as possible.</p>

                <h2>7. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h2>8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at [Contact Information].</p>
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

export default PrivacyPolicy;
