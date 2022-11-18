import Product from './product';

class Diffuser extends Product {
  constructor({
    name,
    price,
    category,
    id,
    description,
    image,
    flavour,
    size,
  }) {
    super({ name, price, category, id, description, image, size });
    this.flavour = flavour;
  }
}

export default Diffuser;
