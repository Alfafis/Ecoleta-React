import { Request, Response } from 'express';
import Knex from '../database/connections';

class ItemsController {
   async index(request: Request, response: Response) {
      const items = await Knex('items').select('*');

      // transformar dados para o consumo no Front-end
      const serializedItems = items.map(item => {
         return {
            id: item.id,
            name: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
         }
      })

      return response.json(serializedItems);
   }
};

export default ItemsController;