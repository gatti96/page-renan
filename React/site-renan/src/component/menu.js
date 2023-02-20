import React from "react";
import Bootstrap from '../../public/css/bootstrap.min.css'

class Menu extends React.Component {
  render() {
    return (
      <header>
        <nav className={Boostrap.navbar Bootstrap.navbarExpandLg Boostrap.bgNew}>
          <div className="container-fluid">
            <a className="navbar-brand" href="./index.html"><img src="./img/logo.png" alt="Logo Renan Gatti" title="Logo Renan Gatti" className="d-inline-block align-text-top image-logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active link-hover" aria-current="page" href="#" onclick="paginaAtual()">Home</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link active link-hover" href="./pages/portfolio.html">Projetos</a>
                </li>                
                <li class="nav-item">
                  <a class="nav-link active link-hover" href="./pages/contact.html">Contato</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active link-hover" href="./pages/blog.html">Blog</a>
                </li>
            </div>
            
            <div class="container-fluid ">
              <span class="navbar-text">
                Bem vindos ao meu site!
              </span>
            </div>
            <div class="position-header">
              <div class="data container-fluid data">
                <h4 id="js-data"></h4>
              </div>
              <div class="container-fluid tema">
                <button id="theme" class="theme">Mudar Tema</button>
              </div>
            </div>
            
          </div>
        </nav>
      </header> <!--Fim do cabeçalho-->

    )
  }
}

export default Menu