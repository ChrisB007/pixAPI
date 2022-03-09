import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const baseUrl = 'https://pixabay.com/api/';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState({});

  const fetchImage = async () => {
    try {
      const res = await fetch(
        `${baseUrl}?key=${process.env.REACT_APP_API_KEY}&id=${id}`,
      );
      const data = await res.json();
      const { hits } = data;
      setLoading(false);
      setImage(hits[0]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
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

  console.log(image);

  return (
    <main>
      <div className="flex flex-col p-4 rounded-lg shadow-lg overflow-hidden">
        <img
          src={image.largeImageURL}
          alt={image.user}
          className="object-contain m-auto w-auto h-auto p-2"
        />
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <h1 className="text-center text-2xl">Posted by: {image.user} </h1>
          <p className="text-center">Type: {image.type}</p>
          <p className="text-center">Tags: {image.tags}</p>
          <p className="text-center">Comments: {image.comments}</p>
          <p className="text-center">Views: {image.views}</p>
        </div>
        <button
          className='w-96 m-auto pb-3 className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"'
          onClick={() => navigate('/')}
        >
          Go back
        </button>
      </div>
    </main>
  );
}
