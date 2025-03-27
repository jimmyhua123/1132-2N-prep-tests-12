import { TbWorldWww } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa6';

const ProjectsCard_12 = ({ img, url, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shdow-xl duration-300'>
      <img src={img} className='w-full object-cover h-64 rounded-t-lg' alt='' />
      <div className='capitalize p-8 tracking-wide font-medium'>
        <h2 className='text-xl'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'> {text}</p>
        <div className='flex mt-4 gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithub className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard_12;
