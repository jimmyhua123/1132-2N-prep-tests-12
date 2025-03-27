import Navigation_12 from '@/components/Navigation_12';
import Logo_12 from '@/components/Logo_12';

function Header_12() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_12 />
        <Navigation_12 />
      </div>
    </header>
  );
}

export default Header_12;
