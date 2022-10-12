import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16  text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
              <span className='sr-only'>Error</span>! 404 !
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
             opps!  Page Not Found
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-blue-200 text-white-900'
            >
            Home
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;