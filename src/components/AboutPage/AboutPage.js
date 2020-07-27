import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        This is a ecommerce site built in mind for help people sell their items 
        at rummage sales and local sales events. 
      </p>
    </div>
  </div>
);

export default AboutPage;
