import { useEffect, useState } from 'react';
import Images from './component/Images';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './component/error';
import Details from './component/imageDetails';

const baseUrl = 'https://pixabay.com/api/';

function App() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `${baseUrl}?key=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await res.json();
      const { hits } = data;
      setLoading(false);
      setImages(hits);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="text-2xl">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Router>
        <div className=" flex flex-col">
          <section className="mt-10 mb-20">
            <div className="w-4/5 m-auto ">
              <Routes>
                <Route path="/" element={<Images images={images} />} />
                <Route path="/detail/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </section>
        </div>
      </Router>
    </main>
  );
}

export default App;
