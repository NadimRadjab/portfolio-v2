import React from "react";
import simpleCV from "../assets/images/Simple CV.png";
import ptManager from "../assets/images/ptManager.png";
import simpleInvoice from "../assets/images/simpleInvoice.png";
import odinBook from "../assets/images/odinbook.png";
import { useTranslation } from "react-i18next";
import ProjectItem from "./UI/ProjectItem";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-10 overflow-hidden">
        <div
          data-aos="fade-left"
          className="my-10 md:text-start text-center border-b-2 mx-10"
        >
          <h2 className="align-middle md:text-6xl text-4xl uppercase">
            {t("myProjects")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <ProjectItem
            animation="flip-right"
            link="/simple-cv"
            alt="Simple CV"
            image={simpleCV}
          />
          <ProjectItem
            animation="flip-left"
            link="/pt-manager"
            alt="PT-ptManager"
            image={ptManager}
          />

          <ProjectItem
            animation="flip-right"
            link="/simple-invoice"
            alt="Simple Invoice"
            image={simpleInvoice}
          />

          <ProjectItem
            animation="flip-left"
            link="/odin-book"
            alt="Odin Book"
            image={odinBook}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
