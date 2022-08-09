import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button, Typography } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { BestSentences } from './components/bestSentences.component';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
  onAdd: () => void;
  onDelete: (id: string) => void;
  bestSentenceInput: string;
  setBestSentenceInput: (sentence: string) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const {
    character,
    onSave,
    onAdd,
    onDelete,
    bestSentenceInput,
    setBestSentenceInput,
  } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={{ ...character, bestSentenceInput }}
      enableReinitialize={true}
    >
      {() => (
        <Form className={classes.root}>
          <Typography gutterBottom variant="h2" component="h1">
            {character?.name}
          </Typography>
          <TextFieldComponent
            name="bestSentenceInput"
            label="Best Sentence"
            value={bestSentenceInput}
            onChange={(e) => setBestSentenceInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={onAdd}
            className={classes.button}
          >
            Add
          </Button>
          <BestSentences
            arrayData={character.bestSentences}
            onDelete={onDelete}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
