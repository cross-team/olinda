/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import form from '../assets/Safrapay-Authorized-Agent-Designation-Form-(602557911v1 USA).pdf';

export default () => {
  return (
    <Layout
      title="Safrapay - Privacy Policy"
      description="This Privacy Policy is meant to help you understand how Safrapay collects and manages user data."
      keywords="Safra, Safrapay, legal, privacy, cookies, policy, privacy policy, cookies policy, data, user data"
    >
      <Header variation="internal" location="/privacy-policy/" />
      <PageTitle title="Privacy Policy" />
      <Container as="section" className="page-legal" id="content" fluid>
        <Row className="justify-content-center">
          <Col sm={12} md={8} className="page-legal__content">
            <p><strong>Last Revised: October 20, 2020</strong></p>
            <p>This Privacy Policy describes how Safrapay Inc. and our U.S. affiliates (collectively, “we,” “us,” or “our”) collect, use, share, and safeguard personal information.  When we receive information for our own purposes, the processing of that information is described by this Privacy Policy. When we receive information on behalf of Safra National Bank of New York (“SNBNY”), the processing of that information is described by its privacy policy which is available <a href="https://www.safra.com/PrivacyPolicy.aspx" title="Safra Privacy Policy" target="_blank" rel="noreferrer" aria-label="Navigate to Safra Privacy Policy Page">here</a>.</p>
            <p>You can jump to particular topics by going to the headings below:</p>
            <nav aria-label="Content Menu">
              <ul>
                <li>
                  <a href="#types-of-information-we-collect">
                    Types of Information We Collect
                  </a>
                </li>
                <li>
                  <a href="#use-and-processing-of-information">
                    Use and Processing of Information
                  </a>
                </li>
                <li>
                  <a href="#sharing-of-information">
                    Sharing of Information
                  </a>
                </li>
                <li>
                  <a href="#your-choices">
                    Your Choices
                  </a>
                </li>
                <li>
                  <a href="#authorized-agent">
                    Authorized Agent
                  </a>
                </li>
                <li>
                  <a href="#how-we-protect-personal-information">
                    How We Protect Personal Information
                  </a>
                </li>
                <li>
                  <a href="#other-important-information">
                    Other Important Information 
                  </a>
                </li>
                <li>
                  <a href="#contact-information">
                    Contact Information
                  </a>
                </li>
              </ul>
            </nav>
            <h2 id="types-of-information-we-collect">Types of Information We Collect</h2>
            <p>We are a third party service provider of payment processing and digital banking solutions to financial institutions in the United States.  We receive personal information from customers and potential customers (collectively “Customers”) for our own use in providing those services. We also receive personal information and process that information as a third party service provider for SNBNY or other financial institutions.</p>
            <p>The following provides examples of the type of information that we collect from you and how we use that information. </p>
            <div className="page-legal__table">
              <table aria-label="Table with types of information we collect">
                <thead>
                  <tr>
                    <th>Context</th>
                    <th>Types of Data</th>
                    <th>Primary Purpose for Collection and Use of Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Contact Information</td>
                    <td>We collect the name and contact information of Customers and their owners, employees and related parties with whom we interact. </td>
                    <td>We use this information to contact Customers and communicate with them concerning normal business administration related to our services.</td>
                  </tr>
                  <tr>
                    <td>Account Registration (if applicable)</td>
                    <td>We collect your name and contact information if you create an account on one of our portals or apps.  We also collect information relating to the actions that you perform while logged into your account.</td>
                    <td>We use this information to provide account related functionalities to our users. Accounts can be used to save your preferences and transaction history. </td>
                  </tr>
                  <tr>
                    <td>Customer Information</td>
                    <td>We may collect some or all of the following information from Customers, their owners and related third parties who open accounts: the name, phone number, postal address, email address, driver’s license number, date of birth, Social Security Number, and bank account information.</td>
                    <td>We collect this information from Customers in order to accurately provide them with financial products and services, and to conduct AML and fraud monitoring.</td>
                  </tr>
                  <tr>
                    <td>Cookies and first party tracking</td>
                    <td>We may use cookies and clear GIFs. “Cookies” are small pieces of information that a website sends to a computer’s hard drive while a web site is viewed, and clear GIFs are a type of picture file that can be used to store or send data. </td>
                    <td>We use this information to ensure our website operates efficiently. </td>
                  </tr>
                  <tr>
                    <td>Cookies and Third Party Tracking</td>
                    <td>We may participate in behavior-based advertising, this means that a third party uses technology (e.g., a cookie) to collect information about your use of our website so that they can provide advertising about products and services tailored to your interests on our website, or on other websites.</td>
                    <td>We use this information to engage in behavior-based advertising and capture website analytics.</td>
                  </tr>
                  <tr>
                    <td>Demographic Information</td>
                    <td>We may collect personal information, such as your age or location.  </td>
                    <td>We use this information to comply with applicable laws. </td>
                  </tr>
                  <tr>
                    <td>Distance Information</td>
                    <td>When you use one of our Apps we collect your location from the GPS, Wi-Fi, and/or cellular technology in your device to determine your location. </td>
                    <td>We use this information to detect and prevent fraud.</td>
                  </tr>
                  <tr>
                    <td>Email Interconnectivity</td>
                    <td>If you receive email from us, we use certain tools to capture data related to when you open our message, click on any links or banners it contains.</td>
                    <td>We use this information to understand how you interact with our communications to you.</td>
                  </tr>
                  <tr>
                    <td>Employment</td>
                    <td>If you apply for a job posting, or become an employee, we collect information necessary to process your application or to retain you as an employee.  This may include, among other things, your Social Security Number.  Providing this information is required for employment.</td>
                    <td>We use information about current employees to perform our contract of employment, or the anticipation of a contract of employment with you.  In some contexts, we are also required by law to collect information about our employees.  We also use this information to have efficient staffing and work force operations. </td>
                  </tr>
                  <tr>
                    <td>Feedback/Support</td>
                    <td>If you provide us feedback or contact us for support we will collect your name and e-mail address, as well as any other content that you send to us, in order to reply.</td>
                    <td>We use this information in order to receive, and act upon, your feedback or issues.</td>
                  </tr>
                  <tr>
                    <td>Mailing List</td>
                    <td>When you sign up for one of our mailing lists we collect your email address or postal address.    </td>
                    <td>We share information about our products and services with individuals that consent to receive such information.  We also use this information to share information about our products or services.</td>
                  </tr>
                  <tr>
                    <td>Mobile Devices</td>
                    <td>We may collect information from your mobile device such as unique identifying information broadcast from your device when using our apps or visiting our website.</td>
                    <td>We have a legitimate interest in identifying unique visitors, and in understanding how users interact with us on their mobile devices. We also have a legitimate interest in detecting and preventing fraud.</td>
                  </tr>
                  <tr>
                    <td>Partner Promotion</td>
                    <td>We may collect information that you provide as part of a co-branded promotion with another company.</td>
                    <td>We use this information to fulfil our promotions.</td>
                  </tr>
                  <tr>
                    <td>Surveys</td>
                    <td>We may ask you to participate in a survey regarding the services we provide you.  When you participate in a survey, we collect information that you provide through the survey.  If the survey is provided by a third-party service provider, the third party’s privacy policy applies to the collection, use, and disclosure of your information.</td>
                    <td>We use this information to understand your opinions and collect information relevant to our organization.</td>
                  </tr>
                  <tr>
                    <td>Sweepstakes or contests</td>
                    <td>When you participate in a sweepstakes or contest we collect information about you which includes contact information to notify you if you are selected.</td>
                    <td>We use this information to operate the sweepstakes.  In some contexts we are also required by law to collect information about those that enter into our sweepstakes.</td>
                  </tr>
                  <tr>
                    <td>Website interactions</td>
                    <td>We use technology to monitor how you interact with our website. This may include which links you click on, or information that you type into our online forms.  This may also include information about your device or browser.</td>
                    <td>We use this information to understand how you interact with our website to better improve it, and to understand your preferences and interests in order to select offerings that you might find most useful.  We also have a legitimate interest in detecting and preventing fraud.</td>
                  </tr>
                  <tr>
                    <td>Web logs</td>
                    <td>We may collect information, including your browser type, operating system, Internet Protocol (IP) address (a number that is automatically assigned to a computer when the Internet is used), domain name, click-activity, referring website, and/or a date/time stamp for visitors.</td>
                    <td>We use this information to monitor our networks and the visitors to our websites.  Among other things, it helps us understand which of our products or services is the most popular.  We may also use this information to prevent fraud.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>In addition to the information that we collect from you directly, we may also receive information about you from other sources, including third parties, business partners, our affiliates, or publicly available sources.  For example, if you submit a Customer application, we will conduct background checks, AML checks and other financial checks to assist in our underwriting. </p>
            <h2 id="use-and-processing-of-information">Use and Processing of Information</h2>
            <p>In addition to the purposes and uses described above, we use information in the following ways: </p>
            <ul>
              <li>To identify you when you visit our websites or mobile apps.</li>
              <li>To provide financial products and services.</li>
              <li>To improve our services and product offerings.</li>
              <li>To conduct analytics.</li>
              <li>To respond to inquiries related to support, employment opportunities, or other requests.</li>
              <li>To send marketing and promotional materials, including information relating to our products, services, sales, or promotions.</li>
              <li>For internal administrative purposes, as well as to manage our relationships.</li>
            </ul>
            <p>Although the sections above describe our primary purpose in collecting your information, in many situations we have more than one purpose.  For example, if you conduct a financial transaction through our services we may collect your information to perform our contract with you, but we also collect your information as we have a legitimate interest in maintaining your information after your transaction is complete so that we can quickly and easily respond to any questions about your transaction.  As a result, our collection and processing of your information is based in different contexts upon your consent, our need to perform a contract, our obligations under law, and/or our general interest in conducting our business.</p>
            <h2 id="sharing-of-information">Sharing of Information</h2>
            <p>In addition to the specific situations discussed elsewhere in this policy, we disclose information in the following situations:</p>
            <p><strong>1.	Affiliates and Acquisitions.</strong> We may share information with our U.S. corporate affiliates (e.g., parent company, sister companies, subsidiaries, joint ventures, or other companies under common control).  If another company acquires, or plans to acquire, our company, business, or our assets, we will also share information with that company, including at the negotiation stage.</p>
            <p><strong>2.	Other Disclosures with Your Consent.</strong>  We may ask if you would like us to share your information with other unaffiliated third parties who are not described elsewhere in this policy.</p>
            <p><strong>3.	Other Disclosures without Your Consent.</strong> We may disclose information in response to subpoenas, warrants, or court orders, or in connection with any legal process, or to comply with relevant laws.  We may also share your information in order to establish or exercise our rights, to defend against a legal claim, to investigate, prevent, or take action regarding possible illegal activities, suspected fraud, safety of person or property, or a violation of our policies, or to comply with your request for the shipment of products to or the provision of services by a third party intermediary.</p>
            <p><strong>4.	Partner Promotion.</strong> We may offer contests, sweepstakes, or other promotions with third party partners.  If you decide to enter a contest, sweepstakes, or promotion that is sponsored by a third party partner, the information that you provide will be shared with us and with them.  Their use of your information is governed by their privacy policy. </p>
            <p><strong>5.	Service Providers.</strong> We may share your information with service providers.  Among other things service providers may help us to administer our website, conduct surveys, provide technical support, provide fraud/AML monitoring, assist with underwriting, and process payments.</p>
            <p><strong>6.	Sharing with Affiliates and Non-Affiliates for Marketing and Other Purposes.</strong> We may share your information with affiliates and non-affiliates for marketing and other purposes. Under certain circumstances, you may opt-out of such sharing with respect to certain data you have provided to us. In addition, you may opt-out of the sharing of certain information with our affiliates by using one of the methods listed below under “Contact Information.”</p>
            <h2 id="your-choices">Your Choices</h2>
            <p>You may be able to make the following choices regarding your personal information:</p>
            <p><strong>1.	Access to Your Personal Information.</strong> You may request access to your personal information by contacting us at the address described below. If required by law, upon request, we will grant you reasonable access to the personal information that we have about you.   You may also be entitled to ask us for a notice describing what categories of personal information (if any) we share with third parties or affiliates for direct marketing. </p>
            <p><strong>2.	Deletion of Your Personal Information.</strong>  You may request that we delete your personal information by contacting us at the address described below.  If required by law, we will grant a request to delete information.  If we are processing your information on behalf of a third party, we will forward your request and await instructions from them on whether your information should be deleted. You should note that in many situations we must keep your personal information to comply with our legal obligations, resolve disputes, enforce our agreements, or for another one of our business purposes.  </p>
            <p><strong>3.	Online Tracking.</strong>  We do not currently recognize automated browser signals regarding tracking mechanisms, which may include &quot;Do Not Track&quot; instructions. </p>
            <p><strong>4.	Promotional Emails.</strong> You may choose to provide us with your email address for the purpose of allowing us to send free newsletters, surveys, offers, and other promotional materials to you, as well as targeted offers from third parties.  You can stop receiving promotional emails by following the unsubscribe instructions in e-mails that you receive.  If you decide not to receive promotional emails, we may still send you service related communications. </p>
            <p><strong>5.	Promotional Mailings.</strong>  If at any time you do not want to receive offers and/or circulars from us you can remove yourself from our mailing lists by emailing us (our contact information is below) with &quot;NO SNAIL MAIL&quot; in the subject line along with your name, address and zip code. Please note that our mailings are prepared in advance of their being sent. Although we will remove your name from our mailing list after receiving your request, you may still receive mailings from us that had been initiated prior to your name being removed.</p>
            <p><strong>6.	Promotional Text Messages.</strong> If you receive a text message from us that contains promotional information you can opt-out of receiving future text messages by replying “STOP.”</p>
            <p>Please address written requests and questions about your rights to <a href="mailto:privacy@safrapay.com">privacy@safrapay.com</a> or call us at <a href="tel:+18774723727">1-877-472-3727</a>.</p>
            <p>Note that, as required by law, we will require you to prove your identity.  We may conduct an identity verification by phone call or email. Depending on your request, we will ask for information to verify your identity. We may also ask you to provide a signed declaration confirming your identity. Following a request, and to the extent required by law, we will use reasonable efforts to supply, correct or delete personal information about you in our files.</p>
            <p>In some circumstances, you may designate an authorized agent to submit requests to exercise certain privacy rights on your behalf.  We will require verification that you provided the authorized agent permission to make a request on your behalf.  You must provide us with a copy of the signed permission you have given to the authorized agent to submit the request on your behalf and verify your own identity directly with us.  </p>
            <h2 id="authorized-agent">Information for Authorized Agents</h2>
            <p>If you are an authorized agent submitting a request on behalf of an individual, you must attach a copy of the following information to the request:</p>
            <p>1.	A completed Authorized Agent Designation <a href={form} aria-label="Navigate to Authorized Agent Designation Form">Form</a> indicating that you have authorization to act on our Customer’s behalf.</p>
            <p>2.	If you are a business located in California, proof that you are registered with the Secretary of State to conduct business in California.</p>
            <p>If we do not receive both pieces of information, the request will be denied.</p>
            <h2 id="how-we-protect-personal-information">How We Protect Personal Information</h2>
            <p>No method of transmission over the Internet, or method of electronic storage, is fully secure. While we use reasonable efforts to protect your personal information from unauthorized access, use, or disclosure, we cannot guarantee the security of your personal information. In the event that we are required by law to inform you of a breach to your personal information we may notify you electronically, in writing, or by telephone, if permitted to do so by law.</p>
            <p>Some of our websites and/or mobile applications permit you to create an account.  When you do you will be prompted to create a password.  You are responsible for maintaining the confidentiality of your password, and you are responsible for any access to or use of your account by someone else that has obtained your password, whether or not such access or use has been authorized by you.  You should notify us of any unauthorized use of your password or account.</p>
            <h2 id="other-important-information">Other Important Information</h2>
            <p>The following additional information relates to our privacy practices:</p>
            <p>•	<strong>Transmission Of Information To Other Countries.</strong> As a multi-national company we may transmit information between and among our affiliates.  As a result your information may be processed in a foreign country where privacy laws may be less stringent than the laws in your country.  Nonetheless, where possible we take steps to treat personal information using the same privacy principles that apply pursuant to the law of the country in which we first received your information.  By submitting your personal information to us you agree to the transfer, storage and processing of your information in a country other than your country of residence.  If you would like more information concerning our attempts to apply the privacy principles applicable in one jurisdiction to data when it goes to another jurisdiction, you can contact us using the contact information below.</p>
            <p>•	<strong>Children’s Privacy.</strong> We do not knowingly collect any personal information from children under the age of 13 years. Our websites are directed to persons who are at least 13 years of age. If a parent or guardian is made aware that a child under the age of 13 has provided us with personal information through any point of contact, we ask to be contacted at the below email address, and we will delete the information about the child referenced from our files. If we have actual knowledge that personal information about a person under the age of 13 has been collected without appropriate parental consent, then we will take the appropriate steps to delete such information. We do not sell the personal information of minors less than 16 years of age without affirmative authorization.</p>
            <p>•	<strong>Third Party Applications/Websites.</strong>  We have no control over the privacy practices of websites or applications that we do not own. </p>
            <p>•	<strong>Changes to This Privacy Policy.</strong>  We may change our privacy policy and practices over time.  To the extent that our policy changes in a material way, the policy that was in place at the time that you submitted personal information to us will generally govern that information unless we receive your consent to the new privacy policy.  Our privacy policy includes an “effective” and “last updated” date. The effective date refers to the date that the current version took effect. The last updated date refers to the date that the current version was last substantively modified.</p>
            <p>•	<strong>Information for California Residents.</strong>  California law indicates that organizations should disclose whether certain categories of information are collected, “sold” or transferred for an organization’s “business purpose” (as those terms are defined under California law).  You can find a list of the categories of information that we collect and share <a href="#california-information-sharing-disclosure" aria-label="List of categories of information that we collect">here</a>. Please note that because this list is comprehensive it may refer to types of information that we share about people other than yourself. If you would like more information concerning the categories of personal information (if any) we share with third parties or affiliates for those parties to use for direct marketing please submit a written request to us using the information in the &quot;Contact Information&quot; section below.  We do not discriminate against California residents who exercise any of their rights described in this Privacy Policy.</p>
            <p id="contact-information">Contact Information.  If you have any questions, comments, or complaints concerning our privacy practices, or, where required by law, if you would like to submit a request based on a right listed in this policy, please contact us at the appropriate address below.  We will attempt to respond to your requests and to provide you with additional privacy-related information. </p>
            <p>
              SafraPay, Inc.<br />
              <a href="mailto:privacy@safrapay.com">privacy@safrapay.com</a><br />
              3050 NE Aventura Boulevard<br />
              Aventura, Florida 33180<br />
              <a href="tel:+18774723727">1-877-472-3727</a>
            </p>
            <p>If you are not satisfied with our response, and are in the European Union, you may have a right to lodge a complaint with your local supervisory authority.</p>
            <p>
              <strong>Effective Date: November 1, 2020</strong><br />
              <strong>Last Revised Date: October 19, 2020</strong>
            </p>
            <h2 id="california-information-sharing-disclosure">California Information Sharing Disclosure</h2>
            <p>California Civil Code Sections 1798.115(c), 1798.130(a)(5)(c), 1798.130(c), and 1798.140 indicate that organizations should disclose whether the following categories of personal information are collected, transferred for “valuable consideration,” or transferred for an organization’s “business purpose” (as those terms are defined under California law).  Safrapay does not “sell” data under California law.  The table below indicates the categories of personal information we collect and transfer in a variety of contexts.  Please note that because this list is comprehensive, it may refer to types of information that we collect and share about people other than yourself. </p>
            <div className="page-legal__table">
              <table aria-label="Table with categories of personal information we collect">
                <thead>
                  <tr>
                    <th width="40%">Categories of Personal Information That We Collect</th>
                    <th>To Whom We Disclose Personal Information for Business Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Identifiers</strong> – such as name, postal address, phone number, unique personal identifier, online identifier, internet protocol (IP) address, device ID, email address, account name, signature, social security number, driver’s license number, passport number, or other similar identifiers.</td>
                    <td>
                      <ul>
                        <li>Data analytics providers</li>
                        <li>Marketing communications providers (e.g., email, SMS, post)</li>
                        <li>Website/email optimization providers</li>
                        <li>Third parties necessary to complete transactions and provide our products/services,</li>
                        <li>Internet service providers</li>
                        <li>Operating systems and platforms</li>
                        <li>Website/email optimization providers</li>
                        <li>Data center/host/cloud-service providers</li>
                        <li>Third parties who assist with information technology and security programs</li>
                        <li>Government entities, law enforcement, and other parties as required by law, including litigation </li>
                        <li>Payment processors, financial institutions, and others as needed to complete transactions and for authentication, security, and fraud prevention</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Financial information</strong> – such as bank account number, credit or debit card number, or other financial information.</td>
                    <td>
                      <ul>
                        <li>Data center/host/cloud-service providers </li>
                        <li>Third parties necessary to complete transactions and provide our products/services,</li>
                        <li>Payment processors, financial institutions, and others as needed to complete transactions and for authentication, security, and fraud prevention</li>
                        <li>Third parties who assist with information technology and security programs</li>
                        <li>Third parties who assist with fraud prevention, detection, and mitigation</li>
                        <li>Government entities, law enforcement, and other parties as required by law, including litigation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Geolocation data</strong> – such as precise physical location.</td>
                    <td>
                      <ul>
                        <li>Data analytics providers</li>
                        <li>Website/email optimization providers</li>
                        <li>Third parties who assist with information technology and security programs</li>
                        <li>Third parties who assist with fraud prevention, detection, and mitigation</li>
                        <li>Government entities, law enforcement, and other parties as required by law, including litigation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Electronic and sensory data</strong> – such as audio, electronic, visual, thermal, olfactory, or similar information (e.g., pictures, a recording of a customer service call, security video surveillance footage).</td>
                    <td>
                      <ul>
                        <li>Data center/host/cloud-service providers </li>
                        <li>Third parties necessary to complete transactions and provide our products/services,</li>
                        <li>Third parties who assist with information technology and security programs</li>
                        <li>Third parties who assist with fraud prevention, detection, and mitigation</li>
                        <li>Government entities, law enforcement, and other parties as required by law, including litigation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Professional/employment information</strong> – such as occupation.</td>
                    <td>
                      <ul>
                        <li>Third parties necessary to complete transactions and provide our products/services,</li>
                        <li>Third parties who assist with information technology and security programs</li>
                        <li>Third parties who assist with fraud prevention, detection, and mitigation</li>
                        <li>Government entities, law enforcement, and other parties as required by law, including litigation</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Inferences</strong> – drawn from any of the information listed above to create a profile</td>
                    <td>
                      <ul>
                        <li>Data center/host/cloud-service providers </li>
                        <li>Marketing communications providers (e.g., email, SMS, post)</li>
                        <li>Website/email optimization providers</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
};
