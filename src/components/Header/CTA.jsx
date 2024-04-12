import React from "react";
import OmResume from "../../Assets/Om Jaju Resume Pdf.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={OmResume} className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
