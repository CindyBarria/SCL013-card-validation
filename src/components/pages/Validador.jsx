export function Validador() {
    return (
        <div id="Validador">
         
            <img src="https://i.ibb.co/M1HLp0C/LOGO-AMARILLO.png"/>
            <form>
              <p id="names"></p>
              <label htmlFor="numberCard">Ingrese Nº de Tarjeta</label>
              <input type="text" inputMode="numeric" id="numberCard" maxLength="16" placeholder="1111-2222-3333-4444"/>
            </form>
            <input type="submit" id="validar" value="Validar"/>
   
        </div>
    );
}
