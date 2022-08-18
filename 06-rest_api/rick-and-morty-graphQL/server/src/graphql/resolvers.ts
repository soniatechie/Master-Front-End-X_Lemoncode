import {
  Character,
  CharacterEdit,
  getCharacter,
  getCharacterList,
  updateCharacter,
} from '../db';

interface SaveCharacterArgs {
  character: CharacterEdit;
}

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacterList();
      return characters;
    },
    character: async (parent, args): Promise<Character> => {
      const character = await getCharacter(args.id);
      return character;
    },
  },
  Mutation: {
    saveCharacter: async (
      parent,
      args: SaveCharacterArgs
    ): Promise<boolean> => {
      await updateCharacter(args.character);
      return true;
    },
  },
};
