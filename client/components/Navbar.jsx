import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
      className="bg-black w-full flex flex-row items-center justify-between p-7"
    >
      {/* logo */}
      <Link
        to={'/'}
      >
        <h1
          className="text-white font-bold uppercase text-4xl tracking-wider"
        >
          Company Logo
        </h1>
      </Link>

      {/* nav links */}
      <div>
        <ul
          className="text-white flex flex-row space-x-8 font-semibold items-center"
        >
          <Link
            to={'/'}
          >
            <li>Home</li>
          </Link>
          <Link
            to={'/services'}
          >
            <li>Services</li>
          </Link>
          <Link
            to={'/shop'}
          >
            <li>Shopping</li>
          </Link>
          <Link
            to={'/about-us'}
          >
            <li>About</li>
          </Link>
          <Link
            to={'/contact'}
          >
            <li>Contact</li>
          </Link>
          <Link
            to={'/create-product'}
            className='bg-amber-600 p-3'
          >
            <li>Create New Product</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar