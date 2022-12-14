import "./Footer.css";
import "boxicons";

function Footer() {
  return (
    <footer>
      <div class="row footer__row">
        <a href="#header" class="footer__anchor">
          <h3 class="footer__logo">MB</h3>
          <span class="footer__logo--popper">
            Top
            <box-icon name='up-arrow-alt' classList="arrow"></box-icon>
          </span>
        </a>
        <div class="footer__social--list">
          <a
            href="https://github.com/M4TThys123"
            target="_blank"
            rel="noreferrer"
            class="footer__social--link link__hover-effect link__hover-effect--white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/matthijs-blauw-9a9573235/"
            target="_blank"
            rel="noreferrer"
            class="footer__social--link link__hover-effect link__hover-effect--white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:matthijs.blauw@gmail.com"
            target="_blank"
            class="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Email
          </a>
          <a
            href="./assets/extra/Example Resume.pdf"
            target="_blank"
            class="footer__social--link link__hover-effect link__hover-effect--white"
          >
            CV
          </a>
        </div>
        <div class="footer__copyright">Copyright © 2022 Matthijs Blauw</div>
      </div>
    </footer>
  );
}

export default Footer