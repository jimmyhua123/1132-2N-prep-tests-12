import { skills } from "../data";
import SectionTitle_12 from "./SectionTitle_12";
import SkillsCard_12 from "./SkillsCard_12";
const Skills_12 = () => {
  return (
    <section className=" py-20 align-element " id="skills">
      <SectionTitle_12 text="Tech Stack " />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard_12 key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills_12;
