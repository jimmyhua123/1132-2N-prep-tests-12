import aboutSvg from '../assets/about.svg';
import SectionTitle_12 from './SectionTitle_12';

const About_12 = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element  grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64 ' alt='' />
        <article className=''>
          <SectionTitle_12 text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            excepturi corporis inventore reprehenderit iusto blanditiis
            architecto, aut, quas pariatur ab, eum ut expedita eaque possimus?
            Expedita nulla dolores explicabo fuga!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About_12;
