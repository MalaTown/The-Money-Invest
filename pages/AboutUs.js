/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div>
      <title>About-us</title>
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
        About-us
      </h1>
      <h2 style={{ margin: '3%', fontWeight: '600', color: 'grey' }}>
        "Don't just do something because it's a trendy idea and will make you a
        lot of money. The reason I say that is because any kind of venture
        involves going through difficult times. If you're doing something you
        are passionate about and really believe in, then that will carry you
        through,"
        <p>- American businessman Jerry Greenfield.</p>
      </h2>

      <p style={{ margin: '3%', fontWeight: '600' }}>
        Our mission is to provide u the Most Relevant information with 100%
        security. Giving u what you are looking for. Get the Best Results for
        Market Research Companies. Discover us now for Easy to Access
        Information and for your All the Answers. We are Fast and trusted. The
        Money Invest combined Multiple sources.
      </p>
      <p style={{ margin: '3%', fontWeight: '600' }}>
        Our belief is to makes it the largest online financial platform in
        India. But while we've radically changed and evolved, the belief and
        passion to be the best and the most insightful. That, we hope,to keep us
        up-to-date .This we believe is merely the start of our journey.
      </p>
      <p style={{ margin: '3%', fontWeight: '600' }}>
        We want to become it as India's biggest store of news (text and videos),
        analysis, data and tools on investing (across diverse asset classes),
        personal finance, the business sector and the economy.
      </p>

      <Footer />
    </div>
  );
}
