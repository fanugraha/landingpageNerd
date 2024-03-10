import "./promo.css";

const Promo = () => {
  return (
    <div id="promoSection" className="containerPromo">
      <div className="percayakan">
        Harga Paling Murah Dibandingkan Store Lainnya
      </div>
      <div className="imgPromo">
        <img
          src="https://framerusercontent.com/images/NdGGTdTbvwQbKDDv5sriUJS4gKs.png"
          alt=""
        />
      </div>
      <div className="promoDesc">
        Promo Ramadhan sangat cocok untuk kamu yang ingin kejar rank imortal
        tanpa boncos biaya joki
      </div>
      <div className="imgPromo">
        <img
          src="https://framerusercontent.com/images/gI5i6WlnU9RCPzU9KMiZtuxauE.png"
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
