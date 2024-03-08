import "./promo.css";

const Promo = () => {
  return (
    <div id="promoSection" className="containerPromo">
      <div className="percayakan">
        Harga Paling Murah Dibandingkan Store Lainnya
      </div>
      <div className="imgPromo">
        <img
          src="https://framerusercontent.com/images/r5Jd297XlKa7emUMis7b78NK98.png?scale-down-to=512"
          alt=""
        />
      </div>
      <div className="promoDesc">
        Promo Ramadhan sangat cocok untuk kamu yang ingin kejar rank imortal
        tanpa boncos biaya joki
      </div>
      <div className="imgPromo">
        <img
          src="https://framerusercontent.com/images/KoARlevzXMd2J0BkMIAgkwo8dI.png?scale-down-to=512"
          alt=""
        />
      </div>
      <div className="promoDesc">
        Makin hemat dengan harga paketan, kamu bisa menghemat biaya lebih dengan
        promo paket joki rank selama bulan Ramadhan
      </div>
      <div className="percayakan">
        Klaim promo sekarang juga sebelum kehabisan, SLOT TERBATAS!
      </div>
      <div className="btnClaimPromoFooter">
        <a href="https://wa.me/6285163549988">KLAIM PROMO</a>
      </div>
    </div>
  );
};

export default Promo;
