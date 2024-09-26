"use client"; // Marking this file as a Client Component

import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [istermsVisible, setIsTermsVisible] = useState(false);

  const togglePrivacy = () => {
    setIsPrivacyVisible(!isPrivacyVisible);
  };
  const toggleTerms = () => {
    setIsTermsVisible(!istermsVisible);
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>

        {/* Footer Section */}
        <footer className="bg-black text-white py-8 mt-[920px]">
          <p className="ml-[120px] mt-[-10px] text-[20px] text-white opacity-75 shadow-2xl">
            stay tuned ...
          </p>
          <div className="container mx-auto flex justify-between ml-[230px] mt-[30px]">
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/urbanrise.offl?igsh=MW5raDd5eTY1azI3ZQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="h-8 w-8 hover:opacity-75"
                />
              </a>

              {/* Gmail */}
              <a
                href="mailto:urbanriseopus96@gmail.com"
                className="text-white hover:opacity-75"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                  alt="Gmail"
                  className="h-8 w-8 hover:opacity-75"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/message/4L3XWHA3OS5FJ1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="h-8 w-8 hover:opacity-75"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61565797633036&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="h-8 w-8 hover:opacity-75"
                />
              </a>
            </div>
          </div>
          <div className="flex mt-[-35px] ml-[850px] space-x-4">
            <a onClick={togglePrivacy} className="text-white hover:underline cursor-pointer">
              Privacy Policy
            </a>
            <span>|</span>
            <a onClick={toggleTerms} className="text-white hover:underline">
              Terms of Service
            </a>

            <div className="mr-auto">
              <img
                src="/images/urban.png"
                alt="Tile Description"
                className="w-[80px] h-[15vh] mt-[-20px] object-cover"
              />
            </div>
          </div>

        {/* Modal for Privacy Policy */}
{isPrivacyVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-black p-6 rounded shadow-lg max-w-4xl mx-auto overflow-auto max-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <h1 className="text-xl mb-2">Privacy Policy for urbanriseopus96</h1>

      <p className="mb-2">At Urbanriseopus96, accessible from urbanriseopus96.site, one of our main priorities is the privacy of our visitors...</p>
      
      {/* Add your Privacy Policy content here */}
      <h2 className="text-lg font-semibold mt-4">Consent</h2>
      <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      
      {/* More content sections */}
      <h2 className="text-lg font-semibold mt-4">Information we collect</h2>
      <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
      
      {/* Additional sections continue... */}
      <h2 className="text-lg font-semibold mt-4">How we use your information</h2>
      <p>We use the information we collect in various ways, including to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Communicate with you...</li>
      </ul>

      <h2 className="text-lg font-semibold mt-4">Log Files</h2>
      <p>Urbanriseopus96 follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>



<h2 className="text-lg font-semibold mt-4">Google DoubleClick DART Cookie</h2>
<p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

<h2 className="text-lg font-semibold mt-4">Our Advertising Partners</h2>

<p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

<ul>
    <li>
        <p>Google</p>
        <p><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
    </li>
</ul>


<h2 className="text-lg font-semibold mt-4" >Third Party Privacy Policies</h2>

<p>Urbanriseopus96's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

      {/* Additional sections as needed... */}
      <button onClick={togglePrivacy} className="mt-4 text-red-500">
        Close
      </button>
    </div>
  </div>
)}
{istermsVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black p-6 rounded shadow-lg max-w-4xl mx-auto overflow-auto max-h-[80vh]">
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              {/* Add your Terms of Service content here */}
              <h1 className="text-xl mb-2">Terms of Service for urbanriseopus96</h1>
              <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

<h2 className="text-lg font-semibold mt-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

<p>Under the CCPA, among other rights, California consumers have the right to:</p>
<p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
<p>Request that a business delete any personal data about the consumer that a business has collected.</p>
<p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

<h2 className="text-lg font-semibold mt-4">GDPR Data Protection Rights</h2>

<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
<p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
<p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
<p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
<p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
<p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
<p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

<h2 className="text-lg font-semibold mt-4">Children's Information</h2>

<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
              {/* Continue your terms of service content... */}
              <button onClick={toggleTerms} className="mt-4 text-red-500">
                Close
              </button>
            </div>
          </div>
  )}
        </footer>
      </body>
    </html>
  );
}

