import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Lookup } from 'common/models';

const getRandomSentence = (bestSentences: Lookup[]) => {
  if (bestSentences.length > 1) {
    const randomIndex = getRandomIndex(bestSentences);
    return bestSentences[randomIndex].name;
  } else {
    return bestSentences[0].name;
  }
};

const getRandomIndex = (array: any[]) =>
  Math.floor(Math.random() * array.length);

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      getRandomSentence={getRandomSentence}
    />
  );
};
