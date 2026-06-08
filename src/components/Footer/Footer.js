import "./Footer.scss";

import Logo_1 from "../../assets/images/logo/logo-1.png";
import Logo_2 from "../../assets/images/logo/logo-2.png";
import Logo_3 from "../../assets/images/logo/logo-3.png";
import Logo_4 from "../../assets/images/logo/logo-4.png";
import Logo_5 from "../../assets/images/logo/logo-5.png";
import Logo_6 from "../../assets/images/logo/logo-6.png";
import Logo_7 from "../../assets/images/logo/logo-7.png";
import Logo_8 from "../../assets/images/logo/logo-8.png";
import Logo_9 from "../../assets/images/logo/logo-9.png";
import Logo_10 from "../../assets/images/logo/logo-10.png";
import Logo_11 from "../../assets/images/logo/logo-11.png";

const companyLogos = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6, Logo_7];

const certLogos = [Logo_8, Logo_9, Logo_10, Logo_11];

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>KOBUS</h2>

            <span>고속버스 통합예매</span>

            <p>
              전국 고속버스를 한 번에
              <br />
              예매하고 관리하는 서비스
            </p>
          </div>

          <div className="footer-info">
            <ul className="footer-menu">
              <li>서비스 이용약관</li>
              <li>개인정보 처리방침</li>
              <li>고속버스 운송약관</li>
              <li>티머니 모빌리티</li>
              <li>관련사이트</li>
            </ul>

            <div className="footer-detail">
              <p>고객센터 1644-9030</p>
              <p>배차관련 문의 : 출발지 · 터미널로 문의</p>
            </div>

            <div className="footer-detail">
              <p>서울특별시 서초구 신반포로 194</p>
              <p>대표자 : 김용성</p>
              <p>통신판매업신고 : 2009-서울서초-0598호</p>
            </div>

            <p className="copyright">
              COPYRIGHT© 2016. WWW.KOBUS.CO.KR. ALL RIGHT RESERVED
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-company">
            {companyLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`회사로고-${index + 1}`} />
            ))}
          </div>

          <div className="footer-cert">
            {certLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`인증마크-${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
