import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav_bar } from './Nav_bar.tsx';
import Footer from './footer/Footer.tsx';
import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContextType } from './Context/IsLoggedInContext.ts';

function App() {
  const [isLoggedIn, setIsLoggedInContext] = useState(false);

  return (
    <>
      <Nav_bar
        isLoggedIn={isLoggedIn}
        setIsLoggedInContext={setIsLoggedInContext}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet
          context={{ isLoggedIn, setIsLoggedInContext } satisfies ContextType}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
