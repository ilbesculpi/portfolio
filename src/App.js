import logo from './logo.svg';
import './App.css';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import { Header, Navbar, About } from './sections';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [pageError, setPageError] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  if( isLoading ) {
    return <Spinner />
  }

  return (
    <>
      <Navbar />
      <Header profile={profileData} />
      <About />
    </>
  );

  async function loadProfile() {
    setIsLoading(true);
    try {
      const response = await fetch('/data/profile.json');
      if( !response.ok ) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const profile = await response.json();
      setProfileData(profile);
      setIsLoading(false);
    }
    catch(error) {
      console.error("Error fetching profile data:", error);
      setIsLoading(false);
      setPageError('Error fetching profile data.');
    }
  }

}


export default App;
