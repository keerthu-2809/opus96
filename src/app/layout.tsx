"use client";

import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head'; // ✅ Import Head here
import urban from './urban.png';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [istermsVisible, setIsTermsVisible] = useState(false);

  const togglePrivacy = () => setIsPrivacyVisible(!isPrivacyVisible);
  const toggleTerms = () => setIsTermsVisible(!istermsVisible);

  return (
    <html lang="en">
      <Head>
        {/* ✅ Facebook Pixel Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1314369903316026'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1314369903316026&ev=PageView&noscript=1"
          />
        </noscript>
        {/* ✅ End Facebook Pixel */}
      </Head>

      <body className="flex flex-col min-h-screen">
        <SessionProvider>
          <main className="flex-grow">{children}</main>

          {/* Your footer and modals remain unchanged — exactly as you had */}
          <footer className="bg-black text-white py-8 lg:mt-[680px] sm:mt-[500px]">
            <p className="lg:ml-[120px] sm:ml-[50px] sm:mt-[-10px] lg:mt-[10px] text-[20px] text-white opacity-75 shadow-2xl">
              stay tuned ...
              </p>
            <div className="container mx-auto flex justify-between lg:ml-[230px] lg:mt-[30px] sm:ml-[180px] sm:mt-[75px]">
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

            <div className="flex lg:mt-[-35px] lg:ml-[850px] sm:mt-[20px] sm:ml-[140px] space-x-4">
              <a onClick={togglePrivacy} className="text-white hover:underline cursor-pointer">
                Privacy Policy
              </a>
              <span>|</span>
              <a onClick={toggleTerms} className="text-white hover:underline">
                Terms of Service
              </a>

              <div className="mr-auto">
                <img
                  src={urban.src}
                  alt="Tile Description"
                  className="lg:w-[80px] lg:h-[15vh] lg:mt-[-20px] sm:mt-[-70px] sm:ml-[40px] flex"
                />
              </div>
            </div>

            {isPrivacyVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-black p-4 md:p-6 rounded shadow-lg w-full max-w-[90vw] md:max-w-4xl mx-auto overflow-auto max-h-[80vh]">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Privacy Policy</h2>
                  <h1 className="text-lg md:text-xl mb-2">Privacy Policy for urbanriseopus96</h1>
                  <p className="text-sm md:text-base mb-2">At Urbanriseopus96, accessible from urbanriseopus96.site...</p>
                  <h2 className="text-md md:text-lg font-semibold mt-4">Consent</h2>
                  <p className="text-sm md:text-base">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                  <h2 className="text-md md:text-lg font-semibold mt-4">Information we collect</h2>
                  <p className="text-sm md:text-base">The personal information that you are asked to provide...</p>
                  <h2 className="text-md md:text-lg font-semibold mt-4">How we use your information</h2>
                  <ul className="list-disc list-inside text-sm md:text-base mb-4">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Communicate with you...</li>
                  </ul>
                  <button onClick={togglePrivacy} className="mt-4 text-red-500">Close</button>
                </div>
              </div>
            )}

            {istermsVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-black p-4 md:p-6 rounded shadow-lg w-full max-w-[90vw] md:max-w-4xl mx-auto overflow-auto max-h-[80vh]">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Terms of Service</h2>
                  <h1 className="text-lg md:text-xl mb-2">Terms of Service for urbanriseopus96</h1>
                  <p className="text-sm md:text-base">You can choose to disable cookies through your individual browser options...</p>
                  <h2 className="text-md md:text-lg font-semibold mt-4">CCPA Privacy Rights</h2>
                  <p className="text-sm md:text-base">Under the CCPA, among other rights...</p>
                  <p className="text-sm md:text-base">Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                  <h2 className="text-md md:text-lg font-semibold mt-4">Children&apos;s Information</h2>
                  <p className="text-sm md:text-base">Another part of our priority is adding protection for children while using the internet...</p>
                  <button onClick={toggleTerms} className="mt-4 text-red-500">Close</button>
                </div>
              </div>
            )}
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
