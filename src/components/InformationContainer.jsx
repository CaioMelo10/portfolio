import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(81)98253-0613</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Recife / PE</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
