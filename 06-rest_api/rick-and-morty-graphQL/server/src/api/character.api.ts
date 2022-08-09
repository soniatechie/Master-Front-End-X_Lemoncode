import { Router } from 'express';
import {
  getCharacterList,
  deleteCharacter,
  getCharacter,
  CharacterEdit,
  updateCharacter,
} from '../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.send(characters);
  })
  .delete('/:id', async (req, res) => {
    const id = req.params.id;
    const success = await deleteCharacter(Number(id));
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const character = await getCharacter(Number(id));
    res.send(character);
  })
  // .post('/', async (req, res) => {
  //   const hotelEdit: HotelEdit = req.body;
  //   const id = await insertHotel(hotelEdit);
  //   res.send(id);
  // })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
