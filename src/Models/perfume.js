import Product from './product';

class Perfume extends Product {
  constructor({ name, price, category, id, description, image, type, size }) {
    super({ name, price, category, id, description, image, size });
    this.type = type;
  }
}

export default Perfume;
