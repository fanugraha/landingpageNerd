import "./header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <h1 className="headLineHero">RANK STUCK DISITU SITU AJA?</h1>
      <h2 className="healineDesc">
        Seumur-umur gak pernah nyentuh rank imortal gara-gara di troll mulu
      </h2>
      <div className="btnClaimPromoHeader">
        <a href="#promoSection">KLAIM PROMO</a>
      </div>
      <div className="headlineImg">
        <img
          src="https://framerusercontent.com/images/am2oTkZRS0ZRgZxlXsyc1LnAX8.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
