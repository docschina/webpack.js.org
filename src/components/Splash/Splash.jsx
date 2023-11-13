// Import External Dependencies
import { useState, useEffect } from 'react';

// Import Components
import Container from '../Container/Container';
import SplashViz from '../SplashViz/SplashViz';
import Markdown from '../Markdown/Markdown';
import { PlaceholderComponent } from '../Placeholder/Placeholder';

// Import helpers
import isClient from '../../utilities/is-client';

// Import Demo Content
import SplashContent from '../../content/index.mdx';

// Load Styling
import './Splash.scss';

// const Support = lazy(() => import('../Support/Support'));

const Splash = () => {
  return (
    <div className="splash">
      <SplashViz />

      <div className="splash__section splash__section--dark page__content">
        <Container>
          <Markdown>
            <SplashContent />
          </Markdown>
        </Container>
      </div>
    </div>
  );
};

export default Splash;
