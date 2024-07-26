import PropTypes from 'prop-types';
import StockItem, { CATEGORIES } from '../entities/StockItem';
import { useRef, useState } from 'react';
import { useStock } from '../hooks/UseStock'; // Corrigido para não incluir a extensão

interface ItemFormProps {
  itemToUpdate?: StockItem;
}

interface Item {
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
}

ItemForm.propTypes = {
  itemToUpdate: PropTypes.instanceOf(StockItem),
};

export default function ItemForm({ itemToUpdate }: ItemFormProps) {
  const defaultItem: Item = {
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    category: '',
  };

  const [item, setItem] = useState<Item>(itemToUpdate ? itemToUpdate : defaultItem);
  const { addItem, updateItem } = useStock(); // `updateItem` deve estar disponível aqui
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setItem((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item);
        alert('Item atualizado com sucesso!');
      } else {
        const validItem = new StockItem(item);
        addItem(validItem);
        setItem(defaultItem);
        alert('Item cadastrado com sucesso!');
      }
    } catch (err: any) {
      console.log(err.message);
      alert('Ocorreu um erro.');
    } finally {
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            ref={inputRef}
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            required
            min={0}
            step={1}
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            min={0.0}
            step={0.01}
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            required
            value={item.category}
            onChange={handleChange}
          >
            <option disabled value="">
              Selecione uma categoria...
            </option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          required
          rows={6}
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="button is-primary is-large">Salvar</button>
    </form>
  );
}
