type OrderConstructorParameters = {
  id: string;
  productId: string;
  quantity: string;
  userId: string;
};

export class Order {
  #id: string;
  #productId: string;
  #quantity: string;
  #userId: string;

  constructor({ id, productId, quantity, userId }: OrderConstructorParameters) {
    this.#id = id;
    this.#productId = productId;
    this.#quantity = quantity;
    this.#userId = userId;
  }

  get id() {
    return this.#id;
  }
  get productId() {
    return this.#productId;
  }
  get quantity() {
    return this.#quantity;
  }
  get userId() {
    return this.#userId;
  }
}
