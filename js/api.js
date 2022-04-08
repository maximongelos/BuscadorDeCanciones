import * as UI from './interfaz.js';

class API {
	constructor(artista, cancion) {
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI() {
		const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

		fetch(url)
			.then((respuesta) => respuesta.json())
			.then((resultado) => {
				const {lyrics} = resultado;

				console.log(lyrics);

				if (resultado.lyrics) {
					UI.resultado.textContent = lyrics;
					UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
					console.log('Se ejecuto');
				} else {
					UI.divMensajes.textContent =
						'La cancion no existe, prueba con otra busqueda.';
					UI.divMensajes.classList.add('error');
				}
			});
	}
}

export default API;
