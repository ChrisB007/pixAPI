import React from 'react';
import Image from './Image';

const Images = ({ images }) => {
  const [search, setSearch] = React.useState('');
  return (
    <>
      <section className="mb-10">
        <div className="bg-white flex justify-center">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
              Search for an Image
            </h2>
            <form className="mt-8 sm:flex">
              <label htmlFor="search" className="sr-only">
                Search for an image
              </label>
              <input
                id="search"
                name="search"
                type="search"
                autoComplete="search"
                onChange={(e) => setSearch(e.target.value)}
                required
                className="w-full border px-5 py-3 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 sm:max-w-xs border-gray-300 rounded-md"
                placeholder="Search by tags"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className=" mb-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {images
            .filter((image) => image.tags.toLowerCase().includes(search))
            .map((image) => {
              return <Image key={image.id} {...image} />;
            })}
        </div>
      </section>
    </>
  );
};

export default Images;
