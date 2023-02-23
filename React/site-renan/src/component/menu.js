import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <header>
            <nav className="navbar navbar-expand-lg bg-new">
              <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">
                  <img
                    src="./img/logo.png"
                    alt="Logo Renan Gatti"
                    title="Logo Renan Gatti"
                    className="d-inline-block align-text-top image-logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active link-hover"
                        aria-current="page"
                        href="#"
                        onclick="paginaAtual()"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="nav-link active link-hover"
                        href="./pages/portfolio.html"
                      >
                        Projetos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active link-hover"
                        href="./pages/contact.html"
                      >
                        Contato
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active link-hover"
                        href="./pages/blog.html"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="container-fluid ">
                  <span className="navbar-text">Bem vindos ao meu site!</span>
                </div>
                <div className="position-header">
                  <div className="data container-fluid data">
                    <h4 id="js-data"></h4>
                  </div>
                  <div className="container-fluid tema">
                    <button id="theme" class="theme">
                      Mudar Tema
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </>
    );
  }
}

export default Menu;
