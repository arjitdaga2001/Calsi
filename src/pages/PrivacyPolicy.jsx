import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import './legal.css';

export function PrivacyPolicy() {
  useDocumentMetadata(
    'Privacy Policy | Calsi',
    'Read Calsi\'s Privacy Policy. We are committed to protecting your personal data and explain how we collect, use, and safeguard your information.'
  );

  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">Last updated: June 12, 2026</p>
      </div>

      <div className="legal-body">

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Calsi</strong> ("we," "our," or "us"). Calsi is a free, browser-based financial
            calculator platform designed to help individuals plan investments, loans, and taxes. We are committed
            to protecting your privacy and ensuring transparency about how we handle any data in connection with
            your use of our website at <strong>calsi.vercel.app</strong> (the "Service").
          </p>
          <p>
            By using Calsi, you agree to the practices described in this Privacy Policy. If you do not agree,
            please discontinue use of the Service.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <p>
            Calsi does <strong>not</strong> require you to create an account or provide any personally identifiable
            information (PII) to use our calculators. All calculations are performed entirely within your browser.
            No financial data you enter into any calculator is transmitted to or stored on our servers.
          </p>
          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect the following non-personal information:</p>
          <ul>
            <li><strong>Log Data:</strong> IP address, browser type and version, pages visited, time and date of visit, time spent on pages, and referring URL.</li>
            <li><strong>Device Information:</strong> Device type, operating system, and screen resolution.</li>
            <li><strong>Usage Analytics:</strong> Aggregated, anonymised data about how users interact with the Service, collected through analytics tools.</li>
          </ul>
          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to improve your experience and serve relevant
            advertisements. Cookies we use include:
          </p>
          <ul>
            <li><strong>Strictly Necessary Cookies:</strong> Required for the Service to function (e.g., session cookies).</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the Service (e.g., Google Analytics).</li>
            <li><strong>Advertising Cookies:</strong> Used by our ad partners (e.g., Google AdSense) to deliver personalised ads based on your interests and browsing history.</li>
          </ul>
          <p>
            You may control or disable cookies through your browser settings. Please note that disabling certain
            cookies may affect the functionality of the Service.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information collected to:</p>
          <ul>
            <li>Operate, maintain, and improve the Service.</li>
            <li>Analyse usage patterns to enhance user experience.</li>
            <li>Serve relevant advertisements through third-party ad networks.</li>
            <li>Comply with applicable laws and legal obligations.</li>
            <li>Detect, prevent, and address technical issues or abuse.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Advertising and Third-Party Services</h2>
          <p>
            Calsi is supported by advertising. We participate in Google AdSense and other ad networks.
            These services may use cookies, web beacons, and similar technologies to collect information about
            your visits to this and other websites in order to provide targeted advertisements.
          </p>
          <p>
            The data practices of our advertising partners are governed by their own privacy policies. We
            encourage you to review the privacy policies of these third parties:
          </p>
          <ul>
            <li><strong>Google AdSense & Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          </ul>
          <p>
            You may opt out of personalised advertising by visiting{' '}
            <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
              www.aboutads.info/choices
            </a>{' '}
            or{' '}
            <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
              www.youronlinechoices.com
            </a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Sharing and Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information to third parties. We may share information:</p>
          <ul>
            <li><strong>With Service Providers:</strong> Trusted vendors who assist in operating the Service (e.g., hosting providers, analytics platforms), bound by confidentiality obligations.</li>
            <li><strong>For Legal Compliance:</strong> When required by law, court order, or governmental authority.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where the acquiring party agrees to honour this Privacy Policy.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Data Retention</h2>
          <p>
            Since Calsi does not store personal financial data, there is no user data to delete from our servers.
            Anonymised analytics data may be retained for up to 26 months as per industry standards. Cookies
            are retained for the periods set by each respective service provider.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights regarding your data:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request information about data we hold relating to you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations).</li>
            <li><strong>Right to Object:</strong> Object to certain types of data processing, including direct marketing.</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <strong>privacy@calsi.app</strong>.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Calsi is not directed at individuals under the age of 13 (or the applicable age of consent in your
            jurisdiction). We do not knowingly collect personal information from children. If you believe a child
            has provided personal information to us, please contact us immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect the Service from
            unauthorised access, alteration, or destruction. However, no method of transmission over the internet
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by
            updating the "Last updated" date at the top of this page. Your continued use of the Service after
            any changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="legal-contact-box">
            <p><strong>Calsi</strong></p>
            <p>Email: <a href="mailto:privacy@calsi.app">privacy@calsi.app</a></p>
            <p>Website: <a href="https://calsi.vercel.app" target="_blank" rel="noopener noreferrer">calsi.vercel.app</a></p>
          </div>
        </section>

      </div>
    </div>
  );
}
