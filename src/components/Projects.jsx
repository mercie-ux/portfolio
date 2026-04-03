import { projects } from "../data/portfolio";
import StackCards from "./StackCards";

export default function Projects() {
  return (
    <section id="projects" style={{ borderTop: "var(--border)", borderBottom: "var(--border)" }}>
      <StackCards projects={projects} />
    </section>
  );
}
