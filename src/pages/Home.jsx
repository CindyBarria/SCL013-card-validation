export default function Home() {
  return (
    <div>
      <div id="Portada">
        <div className="borde">
            <img alt="logo" src="/images/LOGO-AMARILLO.png" />
          <form>
            <p> Ingrese sus datos </p>
            <input type="text" id="wname" placeholder="Ingrese Nombre" />
            <select id="selector" name="Tipo de Tarjeta">
              <option value="">Seleccione Tarjeta </option>
              <option value="1">Mastercard </option>
              <option value="2">Visa</option>
              <option value="3">American Express.</option>
            </select>
          </form>
          <input type="button" id="next" value="Siguiente" />
        </div>
      </div>
    </div>
  );
}
