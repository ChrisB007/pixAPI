import { useNavigate } from 'react-router-dom';

export default function Image({ id, largeImageURL, tags, user, type }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/detail/${id}`);

  return (
    <div>
      <section className="mt-8">
        <ul className="">
          <li className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img
                src={largeImageURL}
                alt={user}
                className="object-cover pointer-events-none group-hover:opacity-75"
              />

              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
                onClick={handleClick}
              >
                <span className="sr-only">View details for {user}</span>
              </button>
            </div>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
              By: {user}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              type: {type}
            </p>
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              tag: {tags}
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
