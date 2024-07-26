export const CATEGORIES = [
  "Jogos",
  "Livros",
  "Brinquedos",
  "Acessórios"
] as const;

type Category = (typeof CATEGORIES)[number];

interface StockItemProps {
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: Category;
}

export default class StockItem {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;

  constructor({ name, description, quantity, price, category }: StockItemProps) {
    this.id = Math.floor(Math.random() * 10000000);
    this.name = name;
    this.description = description;
    this.quantity = +quantity;
    this.price = +price;
    this.category = category;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.validate();
  }

  private validate() {
    const validName = typeof this.name === "string";
    const validDescription = typeof this.description === "string";
    const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity);
    const validPrice = typeof this.price === "number";
    const validCategory = CATEGORIES.includes(this.category);
    if (!(validName && validDescription && validQuantity && validPrice && validCategory)) {
      throw new Error("Invalid item!");
    }
  }
}
