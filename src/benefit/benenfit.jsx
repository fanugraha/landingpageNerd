import "./benefit.css";

const Benefit = () => {
  return (
    <div className="benefit">
      <div className="percayakan">Percayakan saja akun kamu pada kami</div>
      <div className="containerBenefit">
        <div className="benefitOne">
          <div className="benefitImg">
            <img
              src="https://framerusercontent.com/images/Sr35k5IIzFak8s48wXhZFc5g.jpg"
              alt=""
            />
          </div>
          <div className="headlineBenefit">Aman & Profesional</div>
          <div className="descBenefit">
            Akun Kamu akan dikerjakan dengan keamanan 100% oleh para penjoki
            profesional. Proses penjokian dilakukan secara murni tanpa
            menggunakan cheat.
          </div>
        </div>
      </div>
      <div className="containerBenefit">
        <div className="benefitOne">
          <div className="benefitImg">
            <img
              src="https://framerusercontent.com/images/lLtNXm2Oy0fCeOfHcOmgzPIqTlY.jpg"
              alt=""
            />
          </div>
          <div className="headlineBenefit">Peroses Cepat & Murah</div>
          <div className="descBenefit">
            Proses penjokian dilakukan cepat dan tentu saja dengan harga yang
            terjangkau. Kamu juga dapat melakukan request hero dan waktu bermain
            sesuai keinginan Anda.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
