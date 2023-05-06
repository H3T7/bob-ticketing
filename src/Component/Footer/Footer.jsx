import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="d-flex footerBg ">
        <div className="row w-100 mt-5">
          <div className="col-md-6 text-center">
            <h3>Logo Here</h3>
          </div>
          <div className="col-md-6">
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
