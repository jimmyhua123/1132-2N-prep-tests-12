import { projects } from '../data';
import SectionTitle_12 from './SectionTitle_12';
import ProjectsCard_12 from './ProjectsCard_12';

const Projects_12 = () => {
  return (
    <section className=' py-20 align-element ' id='projects'>
      <SectionTitle_12 text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard_12 key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects_12;
