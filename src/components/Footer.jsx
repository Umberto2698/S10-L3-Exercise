import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="container">
        <div className="d-flex flex-column">
          <div className="d-flex mb-1">
            <button className="btn text-white-50 fs-5 ps-0">
              <i className="bi bi-facebook"></i>
            </button>
            <button className="btn text-white-50 fs-5">
              <i className="bi bi-instagram"></i>
            </button>
            <button className="btn text-white-50 fs-5">
              <i className="bi bi-twitter"></i>
            </button>
            <button className="btn text-white-50 fs-5">
              <i className="bi bi-youtube"></i>
            </button>
          </div>
          <div className="mb-3">
            <div className="row row-cols-4 gy-2">
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Audio and Subtitles
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Audio Description
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Help Center
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Gift Cards
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Media Center
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Investor Relations
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Jobs
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Terms of Use
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Privacy
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Legal Notices
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Cookie Preferences
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Corporate Information
              </div>
              <div className="col text-white-50" style={{ fontSize: "0.6rem" }}>
                Contact US
              </div>
            </div>
          </div>
          <div className="mb-2">
            <button className="btn rounded-0 btn-outline-secondary text-white-50 text-center">Service Code</button>
          </div>
          <div>
            <p className="text-white-50" style={{ fontSize: "0.5rem" }}>
              &copy; 1997-2019 Netflix, Inc. &lcub;i-0d00fcda2fdf9c0de&rcub;
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
