import React from 'react';
import Footer from '../components/Footer';

function Disclaimer() {
  return (
    <div>
      <title>Term & Conditions</title>
      <h1
        style={{
          height: '100%',
          color: 'purple',
          borderRadius: '50px',
          border: 'double black 10px',
          marginBottom: '3%',
          marginTop: '1%',
          fontSize: '2rem',
          fontWeight: '600',
        }}
      >
        Disclaimer
      </h1>
      <p style={{ margin: '3%' }}>
        Trading and investing in stocks, options, or equities involve risk and
        are not suitable for all investors. The information in this is provided
        solely for informational and general education. Any strategies
        discussed, including examples which use actual securities and prices are
        strictly for educational and illustrative purposes.
      </p>
      <p style={{ margin: '3%' }}>
        You should consult your tax advisor about any tax consequences and your
        financial advisor prior to making any investment decision. No statement
        should be used as a recommendation to buy or sell a security or provide
        any investment advice.
      </p>
      <p style={{ margin: '3%' }}>
        Prior to buying or selling stocks, option, or equities a person must
        read copies of all the risks and disclosers which can be obtained by
        contacting your broker.
      </p>
      <p style={{ margin: '3%' }}>
        themoneyinvest.com has taken due care and caution in compilation of data
        for its web site. The views and investment tips expressed by investment
        experts on themoneyinvest.com are their own, and not that of the website
        or its management. themoneyinvest.com advises users to check with
        certified experts before taking any investment decision. However,
        themoneyinvest.com does not guarantee the accuracy, adequacy or
        completeness of any information and is not responsible for any errors or
        omissions or for the results obtained from the use of such information.
        themoneyinvest.com especially states that it has no financial liability
        whatsoever to any user on account of the use of information provided on
        its website.
      </p>
      <p style={{ margin: '3%' }}>
        themoneyinvest.com is not responsible for any errors, omissions or
        representations on any of our pages or on any links on any of our pages.
        themoneyinvest.com does not endorse in anyway any advertisers on our web
        pages. Please verify the veracity of all information on your own before
        undertaking any alliance.
      </p>
      <p style={{ margin: '3%' }}>
        The information on this website is updated from time to time.
        themoneyinvest.com however excludes any warranties (whether expressed or
        implied), as to the quality, accuracy, efficacy, completeness,
        performance, fitness or any of the contents of the website, including
        (but not limited) to any comments, feedback and advertisements contained
        within the Site.
      </p>
      <p style={{ margin: '3%' }}>
        This website contains material in the form of inputs submitted by users
        and themoneyinvest.com accepts no responsibility for the content or
        accuracy of such content nor does themoneyinvest.com make any
        representations by virtue of the contents of this website in respect of
        the existence or availability of any goods and services advertised in
        the contributory sections. themoneyinvest.com makes no warranty that the
        contents of the website are free from infection by viruses or anything
        else which has contaminating or destructive properties and shall have no
        liability in respect thereof.
      </p>
      <p style={{ margin: '1%', marginLeft: '3%' }}>
        FOR EDUCATIONAL PURPOSE ONLY
      </p>
      <p style={{ margin: '1%', marginLeft: '3%' }}>
        ADMIN , WEBSITE OR COMPANY NOT SEBI REGISTERED.
      </p>
      <p style={{ margin: '1%', marginLeft: '3%' }}>
        KINDLY CONTACT YOUR FINANCIAL ADVISOR BEFORE TAKING ANY ACTION.
      </p>
      <p style={{ margin: '1%', marginLeft: '3%' }}>
        TEAM THEMONEYINVEST.COM POWERED BY MALATOWN.
      </p>
      <Footer />
    </div>
  );
}

export default Disclaimer;
