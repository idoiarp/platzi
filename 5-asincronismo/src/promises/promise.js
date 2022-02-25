//crear una nueva promesa que se va a completar luego de 1 segundo,
// si el número aleatorio que generamos es mayor a 5 entonces se resuelve,
// si es menor a 5 entonces es rechazada y obtenemos un error.

const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));