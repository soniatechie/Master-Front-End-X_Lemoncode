import crypto from 'crypto';
import {
  createDefaultHotel,
  mockCharacters,
  mockCities,
  mockHotels,
} from './mock-data';
import { Hotel, HotelEdit, City, Character, CharacterEdit } from './models';

let hotels = [...mockHotels];
let cities = [...mockCities];
let characters = [...mockCharacters];

export const getHotelList = async (): Promise<Hotel[]> => hotels;

export const getHotel = async (id: string): Promise<Hotel> =>
  hotels.find((h) => h.id === id);

export const insertHotel = async (hotelEdit: HotelEdit) => {
  const newId = crypto.randomBytes(16).toString('hex');
  hotels = [
    ...hotels,
    {
      ...createDefaultHotel(),
      ...hotelEdit,
      id: newId,
    },
  ];
  return newId;
};

export const updateHotel = async (hotelEdit: HotelEdit): Promise<boolean> => {
  hotels = hotels.map((h) =>
    h.id === hotelEdit.id
      ? {
          ...h,
          ...hotelEdit,
        }
      : h
  );

  return true;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  hotels = hotels.filter((h) => h.id !== id);
  return true;
};

export const getCities = async (): Promise<City[]> => cities;

export const getCharacterList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: number): Promise<Character> =>
  characters.find((c) => c.id === id);

export const updateCharacter = async (
  characterEdit: CharacterEdit
): Promise<boolean> => {
  characters = characters.map((c) =>
    c.id === characterEdit.id
      ? {
          ...c,
          ...characterEdit,
        }
      : c
  );

  return true;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characters = characters.filter((h) => h.id !== id);
  return true;
};
