import './App.css';
import Spinner from './components/Spinner';
import PageError from './components/PageError';
import { useEffect, useState } from 'react';
import { Header, Navbar, Experience, Skills,
  Services, Portfolio, Footer } from './sections';

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

  if( pageError ) {
    <PageError error={pageError} />
  }

  return (
    <>
      <Navbar />
      <Header profile={profileData} />
      <Skills skills={profileData.skills} />
      <Experience experience={profileData.experience} />
      <Portfolio portfolio={profileData.portfolio} />
      {/* <Education /> */}
      <Services />
      <Footer />
    </>
  );

  async function loadProfile() {
    setIsLoading(true);
    try {
      const response = await fetch(process.env.PUBLIC_URL+'/data/profile.json');
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
