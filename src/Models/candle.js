import Product from './product';

class Candle extends Product {
  constructor({ name, price, category, id, description, image, scent, size }) {
    super({ name, price, category, id, description, image, size });
    this.scent = scent;
  }
}

export default Candle;
