import { Link } from 'react-router-dom';
import logo_black from '../images/logo_black.png';

function Header({ heading, paragraph, linkName, linkUrl = '#' }) {
  return (
    <div className='mb-10'>
      <div className='flex justify-center'>
        <img alt='' className='h-14 w-14 fill-green-100' src={logo_black} />
      </div>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        {heading}
      </h2>
      <p className='text-center text-sm text-gray-600 mt-5'>
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className='font-medium text-green-600 hover:text-green-500'
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}

export default Header;
