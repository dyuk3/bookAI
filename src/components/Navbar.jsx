import logo from '../assets/logo.png';
// linear-gradient(45deg, #726bff, #57b6fe);

const Navbar = () => {
  return (
    <div className='mx-auto flex items-center justify-between py-6 text-white '>
      <div className='flex items-center font-bold text-2xl'>
        <div className='w-8 h-8 rounded-[50%] bg-gradient-to-r from-[#726bff] to-[#57b6fe] mr-3 '></div>
        <img className='w-12' src={logo} alt='' />
        BookAI
      </div>
      <div className='flex gap-6 items-center'>
        <a href='/features'>Features</a>
        <a href='/info'>How It Works</a>
        <a href='/roadmap'>Roadmap</a>
        <a href='/api'>API</a>
        <a href='/price'>Price</a>
        <a href='/models'>Models</a>
        <button className='bg-[#678BFF] px-4  py-3 font-normal rounded-md'>Login / Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
