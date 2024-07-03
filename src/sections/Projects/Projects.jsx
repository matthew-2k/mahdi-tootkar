import styles from "./ProjectsStyles.module.css";
import OmniFood from "../../assets/omnifood.jpg";
import BechinBoro from "../../assets/bechinboro.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={OmniFood}
          link="https://github.com/matthew-2k/Omnifood"
          h3="Omnifood"
          p="Demo Responsive project"
        />
        <ProjectCard
          src={BechinBoro}
          link="https://github.com/sajjadrezvani/BechinBoro"
          h3="Bechin Boro"
          p="Entertainment App"
        />
      </div>
    </section>
  );
}

export default Projects;
