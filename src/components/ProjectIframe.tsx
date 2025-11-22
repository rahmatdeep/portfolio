import React from "react";

type ProjectProps = { title: string; description: string; iframeUrl: string };

const ProjectIframe: React.FC<ProjectProps> = ({ title, description, iframeUrl }) => (
  <div className="rounded-lg shadow-lg p-4" style={{ backgroundColor: "rgba(40,40,40,0.8)" }}>
    <h3 className="text-[#FF6F61] font-semibold text-xl mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <iframe
      src={iframeUrl}
      title={title}
      loading="lazy"
      sandbox="allow-same-origin allow-scripts"
      className="w-full rounded-lg h-64"
    />
  </div>
);

export default ProjectIframe;
