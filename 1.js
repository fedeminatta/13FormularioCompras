const inputText = document.querySelector('#text');
const inputUnidades = document.querySelector('#text-unidades');
const inputPrecio = document.querySelector('#text-precio');
const enviar = document.querySelector('#enviar');
const form = document.querySelector('#form');

function insertarFila() {
	let tblDatos = document.querySelector('#tblDatos').insertRow(1);
	let col1 = tblDatos.insertCell(0);
	let col2 = tblDatos.insertCell(1);
	let col3 = tblDatos.insertCell(2);
	let col4 = tblDatos.insertCell(3);

	col1.innerHTML = inputText.value;
	col2.innerHTML = inputPrecio.value;
	col3.innerHTML = inputUnidades.value;
	resultado = parseInt(inputPrecio.value) * parseInt(inputUnidades.value);
	col4.innerHTML = Number(resultado);
}

function sumUnidades() {
	let total = 0;
	const tabla = document.getElementById('tblDatos');
	for (let i = 1; i < tabla.rows.length - 1; i++) {
		let rowValue = tabla.rows[i].cells[2].innerHTML;
		total = total + Number(rowValue);
	}
	const tdTotal = document.getElementById('unidades');
	tdTotal.textContent = total;
}
function sumTotal() {
	let total = 0;
	const tabla = document.getElementById('tblDatos');
	for (let i = 1; i < tabla.rows.length - 1; i++) {
		let rowValue = tabla.rows[i].cells[3].innerHTML;
		total = total + Number(rowValue);
	}
	const tdTotal = document.getElementById('total');
	tdTotal.textContent = total;
}

function resetearForm() {
	form.reset();
}

function preventDefault(e) {
	e.preventDefault();
}