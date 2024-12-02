import React from "react";
import Image from "next/image";

const ProjectsBackground = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image alt="ProjectsBackground" src="/projects_backgrounds.png" fill />
    </div>
  );
};

export default ProjectsBackground;
