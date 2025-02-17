import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './privacy.scss'
import Footer from '../../Components/Footer/Footer'
const Privacy = (props) => {
  return (
    <div className="Privacy">
      <div className="mainwrap">


        {/* navbar section */}
        {/* ********************** */}


        <div className="navwrap">
          <Navbar
            isLogedIn={true}
            windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
          />
        </div>


        {/* content section  */}
        {/* ************************* */}


        <div className="contentwrap">
          <h1>Privacy Policy</h1>
          <p>Effective Date: Feb. 24, 2023</p>
          <div className="content">
            <div className="fcontent">
              <p>At CREATIVE EDGE, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data.<b> By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.</b></p><br></br>
              <p>Remember that your use of CREATIVE EDGE Services is at all times subject to our Terms of Use, which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.</p><br></br>
            </div>
            <div className="scontent">
              <h2>Privacy Policy Table of Contents</h2>
              <h4>What this Privacy Policy Covers</h4>
              <h4>Personal Data</h4>
              <li>Categories of Personal Data We Collect</li>
              <li>Categories of Sources of Personal Data</li>
              <li>Our Commercial or Business Purposes for Collecting Personal Data</li>
              <h4>How We Share Your Personal Data</h4>
              <h4>Tracking Tools, Advertising and Opt-Out</h4>
              <h4>Data Security and Retention</h4>
              <h4> Personal Data of Children</h4>
              <h4>California Resident Rights</h4>
              <h4>Other State Law Privacy Rights</h4>
              <h4>European Union Data Subject Rights</h4>
              <h4>Changes to this Privacy Policy</h4>
              <h4>Contact Information</h4>
            </div>
            <div className="pcover">
              <h2>What this Privacy Policy Covers</h2>
              <p>This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. “Personal Data” means any information that identifies or relates to a particular individual and also includes information referred to as “personally identifiable information” or “personal information” under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don’t own or control or people we don’t manage.</p>
            </div>
            <div className="pdata">
              <h2>Personal Data</h2>
              <h3>Categories of Personal Data We Collect</h3>
            </div>
            <div className="pcategory">
              <h2>Categories of Sources of Personal Data</h2>
              <p>We collect Personal Data about you from the following categories of sources:</p>

              <h3>You</h3>

              <li>When you provide such information directly to us.</li><br></br>
              <li> When you create an account or use our interactive tools and Services.</li><br></br>
              <li>When you voluntarily provide information in free-form text boxes through the Services or through responses to surveys or questionnaires.</li><br></br>
              <li>When you send us an email or otherwise contact us.</li><br></br>
              <li>When you use the Services and such information is collected automatically.</li><br></br>
              <li>Through Cookies (defined in the “Tracking Tools, Advertising and Opt-Out” section below).</li><br></br>
              <li>If you download our mobile application or use a location-enabled browser, we may receive information about your location and mobile device, as applicable.</li><br></br>
              <li>If you download and install certain applications and software we make available, we may receive and collect information transmitted from your computing device for the purpose of providing you the relevant Services, such as information regarding when you are logged on and available to receive updates or alert notices.</li><br></br>
              <h3>Social Media Networks</h3>
              <li>If you provide your social network account credentials to us or otherwise sign in to the Services through a third-party site or service, some content and/or information in those accounts may be transmitted into your account with us.</li>
            </div>
            <div className="ppurpose">
              <h2>Our Commercial or Business Purposes for Collecting Personal Data</h2>
              <h3>Providing, Customizing and Improving the Services</h3>

              <li>Creating and managing your account or other user profiles.</li><br></br>
              <li> Processing orders or other transactions; billing.</li><br></br>
              <li>Providing you with the products, services or information you request.</li><br></br>
              <li>Meeting or fulfilling the reason you provided the information to us.</li><br></br>
              <li>Providing support and assistance for the Services.</li><br></br>
              <li>Improving the Services, including testing, research, internal analytics and product development.</li><br></br>
              <li>Personalizing the Services, website content and communications based on your preferences.</li><br></br>
              <li>Doing fraud protection, security and debugging.</li><br></br>
              <li>Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws, such as the California Consumer Privacy Act (the “CCPA”).</li><br></br>
              <h3>Marketing the Services</h3>
              <li>Marketing and selling the Services.</li><br></br>
              <li>Showing you advertisements, including interest-based or online behavioral advertising.</li>
              <h3>Corresponding with You</h3>
              <li>Responding to correspondence that we receive from you, contacting you when necessary or requested, and sending you information about CREATIVE EDGE or the Services.</li><br></br>
              <li>Sending emails and other communications according to your preferences or that display content that we think will interest you.</li>
              <h3>Meeting Legal Requirements and Enforcing Legal Terms</h3>
              <li>Fulfilling our legal obligations under applicable law, regulation, court order or other legal process, such as preventing, detecting and investigating security incidents and potentially illegal or prohibited activities.</li><br></br>
              <li>Protecting the rights, property or safety of you, CREATIVE EDGE or another party.</li><br></br>
              <li>Enforcing any agreements with you.</li><br></br>
              <li>Responding to claims that any posting or other content violates third-party rights.</li><br></br>
              <li> Resolving disputes.</li><br></br>
              <p>We will not collect additional categories of Personal Data or use the Personal Data we collected for materially different, unrelated or incompatible purposes without providing you notice.</p>
            </div>
            <div className="psharedata">
              <h2>How We Share Your Personal Data</h2>
              <p>We disclose your Personal Data to the categories of service providers and other parties listed in this section. Depending on state laws that may be applicable to you, some of these disclosures may constitute a “sale” of your Personal Data. For more information, please refer to the state-specific sections below.</p>
              <h3>Service Providers.</h3>
              <p>These parties help us provide the Services or perform business functions on our behalf. They include:</p><br></br>
              <li>Hosting, technology and communication providers.</li><br></br>
              <li>Security and fraud prevention consultants.</li><br></br>
              <li>Support and customer service vendors.</li><br></br>
              <li>Payment processors. Our payment processing partners Braintree (offered by PayPal, Inc.) (“Braintree”), Stripe, Inc. (“Stripe”) and App Stores linked to your specific device collect your voluntarily-provided payment card information necessary to process your payment. Please see each payment processing partner’s terms of service and privacy policy for information on its use and storage of your Personal Data.</li>
              <h3>Advertising Partners.</h3>
              <p> These parties help us market our services and provide you with other offers that may be of interest to you. They include:</p>
              <br></br>
              <li> Marketing providers.</li>
              <h3>Analytics Partners.</h3>
              <p>These parties provide analytics on web traffic or usage of the Services. They include:</p>
              <br></br>
              <li>Companies that track how users found or were referred to the Services.</li><br></br>
              <li>Companies that track how users interact with the Services.</li>
              <h3>Parties You Authorize, Access or Authenticate.</h3>
              <br></br>
              <li>Third parties you access through the services.</li><br></br>
              <li>Social media services.</li><br></br>
              <li>Other users.</li>
            </div>
            <div className="plegal">
              <h2>Legal Obligations</h2>
              <p>We may share any Personal Data that we collect with third parties in conjunction with any of the activities set forth under “Meeting Legal Requirements and Enforcing Legal Terms” in the “Our Commercial or Business Purposes for Collecting Personal Data” section above.</p>
            </div>
            <div className="pbusiness">
              <h2>Business Transfers</h2>
              <p>All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices.</p>
            </div>
            <div className="pnotdata">
              <h2>Data that is Not Personal Data</h2>
              <p>We may create aggregated, de-identified or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user. We may use such aggregated, de-identified or anonymized data and share it with third parties for our lawful business purposes, including to analyze, build and improve the Services and promote our business, provided that we will not share such data in a manner that could identify you.</p>
            </div>
            <div className="ptools">
              <h2>Tracking Tools, Advertising and Opt-Out</h2>
              <p>The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs and JavaScript (collectively, “Cookies”) to enable our servers to recognize your web browser, tell us how and when you visit and use our Services, analyze trends, learn about our user base and operate and improve our Services. Cookies are small pieces of data– usually text files – placed on your computer, tablet, phone or similar device when you use that device to access our Services. We may also supplement the information we collect from you with information received from third parties, including third parties that have placed their own Cookies on your device(s). Please note that because of our use of Cookies, the Services do not support “Do Not Track” requests sent from a browser at this time.</p>
              <br></br>
              <p>We use the following types of Cookies:</p>
              <br></br>
              <li><b>Essential Cookies.</b> Essential Cookies are required for providing you with features or services that you have requested. For example, certain Cookies enable you to log into secure areas of our Services. Disabling these Cookies may make certain features and services unavailable.</li>
              <li><b>Functional Cookies.</b> Functional Cookies are used to record your choices and settings regarding our Services, maintain your preferences over time and recognize you when you return to our Services. These Cookies help us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
              <li><b>Performance/Analytical Cookies.</b> Performance/Analytical Cookies allow us to understand how visitors use our Services. They do this by collecting information about the number of visitors to the Services, what pages visitors view on our Services and how long visitors are viewing pages on the Services. Performance/Analytical Cookies also help us measure the performance of our advertising campaigns in order to help us improve our campaigns and the Services’ content for those who engage with our advertising. For example, Google Inc. (“Google”) uses cookies in connection with its Google Analytics services. Google’s ability to use and share information collected by Google Analytics about your visits to the Services is subject to the Google Analytics Terms of Use and the Google Privacy Policy. You have the option to opt-out of Google’s use of Cookies by visiting the Google advertising opt-out page at www.google.com/privacy_ads.html or the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout/.</li>
              <li><b>Retargeting/Advertising Cookies.</b> Retargeting/Advertising Cookies collect data about your online activity and identify your interests so that we can provide advertising that we believe is relevant to you. For more information about this, please see the section below titled “Information about Interest-Based Advertisements.”</li>
              <br></br>
              <p>You can decide whether or not to accept Cookies through your internet browser’s settings. Most browsers have an option for turning off the Cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new Cookie in a variety of ways. You can also delete all Cookies that are already on your device. If you do this, however, you may have to manually adjust some preferences every time you visit our website and some of the Services and functionalities may not work.
                <br></br><br></br>
                To explore what Cookie settings are available to you, look in the “preferences” or “options” section of your browser’s menu. To find out more information about Cookies, including information about how to manage and delete Cookies, please visit http://www.allaboutcookies.org/ or https://ico.org.uk/for-the-public/online/cookies/ if you are located in the European Union.</p>
            </div>
            <div className="padv">
              <h2>Information about Interest-Based Advertisements:</h2>
              <p>We may serve advertisements, and also allow third-party ad networks, including third-party ad servers, ad agencies, ad technology vendors and research firms, to serve advertisements through the Services. These advertisements may be targeted to users who fit certain general profile categories or display certain preferences or behaviors (“Interest-Based Ads”). Information for Interest-Based Ads (including Personal Data) may be provided to us by you, or derived from the usage patterns of particular users on the Services and/or services of third parties. Such information may be gathered through tracking users’ activities across time and unaffiliated properties, including when you leave the Services. To accomplish this, we or our service providers may deliver Cookies, including a file (known as a “web beacon”) from an ad network to you through the Services. Web beacons allow ad networks to provide anonymized, aggregated auditing, research and reporting for us and for advertisers. Web beacons also enable ad networks to serve targeted advertisements to you when you visit other websites. Web beacons allow ad networks to view, edit or set their own Cookies on your browser, just as if you had requested a web page from their site.
                <br></br><br></br>
                We comply with the Digital Advertising Alliance (“DAA”) Self-Regulatory Principles for Online Behavioral Advertising. Through the DAA and Network Advertising Initiative (“NAI”), several media and marketing associations have developed an industry self-regulatory program to give consumers a better understanding of, and greater control over, ads that are customized based a consumer’s online behavior across different websites and properties. To make choices about Interest-Based Ads from participating third parties, including to opt-out of receiving behaviorally targeted advertisements from participating organizations, please visit the DAA’s or NAI’s consumer opt-out pages, which are located at http://www.networkadvertising.org/choices/ or www.aboutads.info/choices. Users in the European Union should visit the European Interactive Digital Advertising Alliance’s user information website http://www.youronlinechoices.eu/.</p>
            </div>
            <div className="pretention">
              <h2> Data Security and Retention</h2>
              <p>We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures based on the type of Personal Data and how we are processing that data. You should also help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanism; limiting access to your computer or device and browser; and signing off after you have finished accessing your account. Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure.
                <br></br><br></br>
                We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you with our Services. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally.</p>
            </div>
            <div className="pchildren">
              <h2>Personal Data of Children</h2>
              <p>As noted in the Terms of Use, we do not knowingly collect or solicit Personal Data about children under 16 years of age; if you are a child under the age of 16, please do not attempt to register for or otherwise use the Services or send us any Personal Data. If we learn we have collected Personal Data from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 years of age may have provided Personal Data to us, please contact us at support@steezy.co.</p>
            </div>
            <div className="prights">
              <h2>California Resident Rights</h2>
              <p>If you are a California resident, you have the rights set forth in this section. Please see the “Exercising Your Rights” section below for instructions regarding how to exercise these rights. Please note that we may process Personal Data of our customers’ end users or employees in connection with our provision of certain services to our customers. If we are processing your Personal Data as a service provider, you should contact the entity that collected your Personal Data in the first instance to address your rights with respect to such data.
                <br></br><br></br>
                If there are any conflicts between this section and any other provision of this Privacy Policy and you are a California resident, the portion that is more protective of Personal Data shall control to the extent of such conflict. If you have any questions about this section or whether any of the following rights apply to you, please contact us at support@steezy.co.</p>
            </div>
            <div className="paccess">
              <h2> Access</h2>
              <p>You have the right to request certain information about our collection and use of your Personal Data over the past 12 months. In response, we will provide you with the following information:
                <br></br><br></br>
                <li>The categories of Personal Data that we have collected about you.</li><br></br>
                <li>The categories of sources from which that Personal Data was collected.</li><br></br>
                <li>The business or commercial purpose for collecting or selling your Personal Data.</li><br></br>
                <li>The categories of third parties with whom we have shared your Personal Data.</li><br></br>
                <li>The specific pieces of Personal Data that we have collected about you.</li><br></br>
                If we have disclosed your Personal Data to any third parties for a business purpose over the past 12 months, we will identify the categories of Personal Data shared with each category of third party recipient. If we have sold your Personal Data over the past 12 months, we will identify the categories of Personal Data sold to each category of third party recipient.</p>
            </div>
            <div className="pdeletion">
              <h2>Deletion</h2>
              <p>You have the right to request that we delete the Personal Data that we have collected about you. Under the CCPA, this right is subject to certain exceptions: for example, we may need to retain your Personal Data to provide you with the Services or complete a transaction or other action you have requested. If your deletion request is subject to one of these exceptions, we may deny your deletion request.</p>
            </div>
            <div className="pyourrights">
              <h2>Exercising Your Rights</h2>
              <p>To exercise the rights described above, you or your Authorized Agent (defined below) must send us a request that (1) provides sufficient information to allow us to verify that you are the person about whom we have collected Personal Data, and (2) describes your request in sufficient detail to allow us to understand, evaluate and respond to it. Each request that meets both of these criteria will be considered a “Valid Request.” We may not respond to requests that do not meet these criteria. We will only use Personal Data provided in a Valid Request to verify your identity and complete your request. You do not need an account to submit a Valid Request.
                <br></br><br></br>
                We will work to respond to your Valid Request within 45 days of receipt. We will not charge you a fee for making a Valid Request unless your Valid Request(s) is excessive, repetitive or manifestly unfounded. If we determine that your Valid Request warrants a fee, we will notify you of the fee and explain that decision before completing your request.
                <br></br><br></br>
                You may submit a Valid Request using the following methods:
                <br></br><br></br>
                <li>Call us at: (213) 394-8803</li><br></br>
                <li>Email us at: support@steezy.co</li><br></br>
                <li>Submit a form at this address: https://preferences.steezy.co/privacy</li><br></br>
                You may also authorize an agent (an “Authorized Agent”) to exercise your rights on your behalf. To do this, you must provide your Authorized Agent with written permission to exercise your rights on your behalf, and we may request a copy of this written permission from your Authorized Agent when they make a request on your behalf.</p>
            </div>
            <div className="popt">
              <h2>Personal Data Sales Opt-Out and Opt-In</h2>
              <p>In this section, we use the term ‘sell’ as it is defined in the CCPA. We sell your Personal Data, subject to your right to opt-out of these sales.
                <br></br><br></br>
                As described in the “Tracking Tools, Advertising and Opt-Out” section above, we have incorporated Cookies from certain third parties into our Services. These Cookies allow those third parties to receive information about your activity on our Services that is associated with your browser or device. Those third parties may use that data to serve you relevant ads on our Services or on other websites you visit. Under the CCPA, sharing your data through third party Cookies for online advertising may be considered a “sale” of information. You can opt out of these sales by following the instructions in this section.
                <br></br><br></br>
                You have the right to opt-out of the sale of your Personal Data. You can opt-out using the following methods:
                <br></br><br></br>
                <li>You can complete the online form found here: Do Not Sell My Personal Information</li><br></br>
                <li>Email us at support@steezy.co</li><br></br>
                Once you have submitted an opt-out request, we will not ask you to reauthorize the sale of your Personal Data for at least 12 months.
                <br></br><br></br>
                To our knowledge, we do not sell the Personal Data of minors under 16 years of age.</p>
            </div>
            <div className="pccpa">
              <h2> We Will Not Discriminate Against You for Exercising Your Rights Under the CCPA</h2>
              <p>We will not discriminate against you for exercising your rights under the CCPA. We will not deny you our goods or services, charge you different prices or rates, or provide you a lower quality of goods and services if you exercise your rights under the CCPA. However, we may offer different tiers of our Services as allowed by applicable data privacy laws (including the CCPA) with varying prices, rates or levels of quality of the goods or services you receive related to the value of Personal Data that we receive from you.</p>
            </div>
            <div className="potherstates">
              <h2>Other State Law Privacy Rights</h2>
              <h3>California Resident Rights</h3>
              <p>Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties’ direct marketing purposes; in order to submit such a request, please contact us at support@steezy.co.</p>

              <h3> Nevada Resident Rights</h3>
              <p>If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Data to third parties who intend to license or sell that Personal Data. You can exercise this right by contacting us at support@steezy.co with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. Please note that we do not currently sell your Personal Data as sales are defined in Nevada Revised Statutes Chapter 603A.</p>
            </div>
            <div className="psubrights">
              <h2>European Union Data Subject Rights</h2>
              <h3>EU Residents</h3>
              <p>If you are a resident of the European Union (“EU”), United Kingdom, Lichtenstein, Norway or Iceland, you may have additional rights under the EU General Data Protection Regulation (the “GDPR”) with respect to your Personal Data, as outlined below.
                <br></br><br></br>
                For this section, we use the terms “Personal Data” and “processing” as they are defined in the GDPR, but “Personal Data” generally means information that can be used to individually identify a person, and “processing” generally covers actions that can be performed in connection with data such as collection, use, storage and disclosure. CREATIVE EDGE will be the controller of your Personal Data processed in connection with the Services.
                <br></br><br></br>
                If there are any conflicts between this this section and any other provision of this Privacy Policy, the policy or portion that is more protective of Personal Data shall control to the extent of such conflict. If you have any questions about this section or whether any of the following applies to you, please contact us at support@steezy.co.</p>

              <h3>Personal Data We Collect</h3>
              <p>The “Categories of Personal Data We Collect” section above details the Personal Data that we collect from you.</p>

              <h3>Personal Data Use and Processing Grounds</h3>
              <p>The “Our Commercial or Business Purposes for Collecting Personal Data” section above explains how we use your Personal Data.
                <br></br><br></br>
                We will only process your Personal Data if we have a lawful basis for doing so. Lawful bases for processing include consent, contractual necessity and our “legitimate interests” or the legitimate interest of others, as further described below.
              </p><br></br><br></br>
              <b>Contractual Necessity:</b> We process the following categories of Personal Data as a matter of “contractual necessity”, meaning that we need to process the data to perform under our Terms of Use with you, which enables us to provide you with the Services. When we process data due to contractual necessity, failure to provide such Personal Data will result in your inability to use some or all portions of the Services that require such data.
              <br></br><br></br>
              <li>Profile or Contact Data</li><br></br>
              <li>Payment Data</li><br></br>
              <li>Device/IP Data</li><br></br>
              <li>Web Analytics </li><br></br>
              <li>Social Network Data </li><br></br>
              <li>Professional or Employment-Related Data </li><br></br>
              <li>Geolocation Data </li><br></br>
              <li>Inferences Drawn From Other Personal Data Collected </li><br></br>
              <li>Other Identifying Information that You Voluntarily Choose to Provide </li>
              <br></br>
              <b>Legitimate Interest:</b> We process the following categories of Personal Data when we believe it furthers the legitimate interest of us or third parties:
              <br></br><br></br>
              <li>Profile or Contact Data</li><br></br>
              <li>Payment Data</li><br></br>
              <li>Device/IP Data</li><br></br>
              <li>Web Analytics</li><br></br>
              <li>Social Network Data</li><br></br>
              <li>Professional or Employment-Related Data</li><br></br>
              <li>Geolocation Data</li><br></br>
              <li>Inferences Drawn From Other Personal Data Collected</li><br></br>
              <li>Other Identifying Information that You Voluntarily Choose to Provide</li><br></br>
              <li>We may also de-identify or anonymize Personal Data to further our legitimate interests.</li><br></br>
              <b>Examples of these legitimate interests include (as described in more detail above):</b>
              <br></br><br></br>
              <li>Providing, customizing and improving the Services.</li><br></br>
              <li>Marketing the Services.</li><br></br>
              <li>Corresponding with you.</li><br></br>
              <li>Meeting legal requirements and enforcing legal terms.</li><br></br>
              <li>Completing corporate transactions.</li><br></br>
              <h2>Consent</h2>
              <p>In some cases, we process Personal Data based on the consent you expressly grant to us at the time we collect such data. When we process Personal Data based on your consent, it will be expressly indicated to you at the point and time of collection.</p>

              <h2> Other Processing Grounds</h2>
              <p> From time to time we may also need to process Personal Data to comply with a legal obligation, if it is necessary to protect the vital interests of you or other data subjects, or if it is necessary for a task carried out in the public interest.</p>

              <h3>Sharing Personal Data</h3>
              <p>The “How We Share Your Personal Data” section above details how we share your Personal Data with third parties.</p>

              <h3> EU Data Subject Rights</h3>
              <p>You have certain rights with respect to your Personal Data, including those set forth below. For more information about these rights, or to submit a request, please email us at support@steezy.co. Please note that in some circumstances, we may not be able to fully comply with your request, such as if it is frivolous or extremely impractical, if it jeopardizes the rights of others, or if it is not required by law, but in those circumstances, we will still respond to notify you of such a decision. In some cases, we may also need you to provide us with additional information, which may include Personal Data, if necessary to verify your identity and the nature of your request.

                <li><b>Access:</b>  You can request more information about the Personal Data we hold about you and request a copy of such Personal Data. You can also access certain of your Personal Data by logging on to your account.</li>
                <li><b>Rectification:</b>  If you believe that any Personal Data we are holding about you is incorrect or incomplete, you can request that we correct or supplement such data. You can also correct some of this information directly by logging on to your account.</li>
                <li> <b>Erasure:</b>  You can request that we erase some or all of your Personal Data from our systems.</li>
                <li><b>Withdrawal of Consent: </b> If we are processing your Personal Data based on your consent (as indicated at the time of collection of such data), you have the right to withdraw your consent at any time. Please note, however, that if you exercise this right, you may have to then provide express consent on a case-by-case basis for the use or disclosure of certain of your Personal Data, if such use or disclosure is necessary to enable you to utilize some or all of our Services.</li>
                <li> <b>Portability: </b> You can ask for a copy of your Personal Data in a machine-readable format. You can also request that we transmit the data to another controller where technically feasible.</li>
                <li> <b>Objection:</b>  You can contact us to let us know that you object to the further use or disclosure of your Personal Data for certain purposes, such as for direct marketing purposes.</li>
                <li><b>Restriction of Processing:</b>  You can ask us to restrict further processing of your Personal Data.</li>
                <li><b>Right to File Complaint:</b>  You have the right to lodge a complaint about CREATIVE EDGE'S practices with respect to your Personal Data with the supervisory authority of your country or EU Member State. A list of Supervisory Authorities is available here: https://edpb.europa.eu/about-edpb/board/members_en.</li></p>
              <h3>Transfers of Personal Data</h3>
              <p>The Services are hosted and operated in the United States (“U.S.”) through CREATIVE EDGE and its service providers, and if you do not reside in the U.S., laws in the U.S. may differ from the laws where you reside. By using the Services, you acknowledge that any Personal Data about you, regardless of whether provided by you or obtained from a third party, is being provided to STEEZY in the U.S. and will be hosted on U.S. servers, and you authorize STEEZY to transfer, store and process your information to and in the U.S., and possibly other countries. You hereby consent to the transfer of your data to the U.S. pursuant to: (i) a data processing agreement incorporating standard data protection clauses promulgated by the European Commission, a copy of which can be obtained at https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32010D0087, (ii) binding corporate rules for data protection that align with the GDPR’s requirements, or (iii) adherence to an industry- or technology-specific approved code of conduct blessed by the European Commission.</p>
            </div>
            <div className="pchanges">
              <h2>Changes to this Privacy Policy</h2>
              <p> We’re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time, but we will alert you to any such changes by placing a notice on the CREATIVE EDGE website, by sending you an email and/or by some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.</p>
            </div>
            <div className="pcontactinfo">
              <h2>Contact Information:</h2>
              If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data or your choices and rights regarding such collection and use, please do not hesitate to contact us at:

              <li>(213) 394-8803</li><br></br>
              <li>https://www.steezy.co/</li><br></br>
              <li>support@steezy.co</li><br></br>
              <li>309 E 8th Street, #305, Los Angeles, California 90014‍</li><br></br>
            </div>
          </div>
        </div>


        {/* footer section */}
        {/* ********************** */}


        <div className="footer">
          <Footer
            windowSize={props.windowSize.length > 0 && props.windowSize ? props.windowSize : undefined}
          />
        </div>
      </div>
    </div>
  )
}

export default Privacy;