import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Lookup } from 'common/models';
import { Typography } from '@material-ui/core';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  getRandomSentence: (bestSentences: Lookup[]) => string;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete, getRandomSentence } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="number of episodes" title="number of episodes">
            {character.episode.length}
          </Avatar>
        }
        title={character.name}
        subheader={character.description}
      />
      <CardMedia
        image={character.picture}
        title={character.name}
        style={{ height: 0, paddingTop: '56.25%' }}
      />
      <CardContent>
        <div className={classes.content}>
          {character.bestSentences && (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                Random Best sentence
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {getRandomSentence(character.bestSentences)}
              </Typography>
              {/* <Chip
                className={classes.chip}
                variant="outlined"
                label={getRandomSentence(character.bestSentences)}
                color="primary"
                size="small"
              /> */}
            </>
          )}
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
