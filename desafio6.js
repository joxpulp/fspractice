import fs from 'fs/promises';

class Archivo {
	constructor(filename) {
		this.filename = filename;
		this.content = [];
	}

	async newProduct(title, price, thumbnail) {
		try {
			this.content.push({
				title: title,
				price: price,
				thumbnail: thumbnail,
				id: this.content.length + 1,
			});
			await fs.writeFile(this.filename, JSON.stringify(this.content, null, 2));
			console.log(`Producto ${title} agregado a ${this.filename}`);
		} catch (error) {
			console.log('No se pudo agregar un producto');
		}
	}

	async readFile() {
		try {
			const readedFile = await fs.readFile(this.filename, 'utf-8');
			console.log(readedFile);
		} catch (error) {
			console.log(this.content);
		}
	}

	async deleteFile() {
		try {
			await fs.unlink(this.filename);
			console.log(`Archivo ${this.filename} borrado`);
		} catch (error) {
			console.log('No se pudo borrar archivo');
		}
	}
}

const products = new Archivo('productos.txt');
products.newProduct('Arroz', 128.34, 'https://bit.ly/3zjJXCh');
products.newProduct('Papa', 200, 'https://bit.ly/3zh4584');
products.newProduct('Mandarina', 500.55, 'https://bit.ly/3zocqab');
products.newProduct('Cebolla', 150.24, 'https://bit.ly/3kIwa42');
products.readFile();
// products.deleteFile();
