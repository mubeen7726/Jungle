import React from 'react';

export default function FooterEnd() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-3">
                <div>
                  <div className="dropdown ps-3">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USA
                    </button>
                    <ul
                      className="dropdown-menu"
                      style={{
                        border: "1px solid black",
                        borderBottom: 'none',
                        borderRadius: "4px",
                        position: "absolute",
                        top: "-260px",
                        left: "44px",
                      }}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">France</a>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">Deutschland</a>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">Italia</a>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">España</a>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">中国</a>
                        <p className='border border-1 border-dark'></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap ps-5 gap-3">
                  <div>
                    <a href="/" className='text-decoration-none text-dark fs-6'>Privacy Center</a>
                  </div>
                  <div>
                    <a href="/" className='text-decoration-none text-dark fs-6'>Privacy Policy</a>
                  </div>
                  <div>
                    <a href="/" className='text-decoration-none text-dark fs-6'>Terms of Use</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='d-flex flex-wrap justify-content-end px-3 gap-3'>
                <div>
                  <img src="js-social-icons-facebook.svg" alt="Facebook" />
                </div>
                <div>
                  <img src="js-social-icons-x.svg" alt="X" />
                </div>
                <div>
                  <img src="js-social-icons-instagram.svg" alt="Instagram" />
                </div>
                <div>
                  <img src="js-social-icons-youtube.svg" alt="YouTube" />
                </div>
                <div>
                  <img src="js-social-icons-linkedIn.svg" alt="LinkedIn" />
                </div>
              </div>
              <div className='d-flex justify-content-end mt-3 px-3'>
                <small>Copyright 2024. All Rights Reserved</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
