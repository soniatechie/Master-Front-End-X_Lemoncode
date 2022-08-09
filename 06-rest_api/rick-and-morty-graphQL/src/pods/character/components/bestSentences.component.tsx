import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import * as classes from './bestSentences.styles';
import { Lookup } from 'common/models';

interface Props {
  arrayData: Array<Lookup>;
  onDelete: (id: string) => void;
}

export const BestSentences: React.FC<Props> = (props) => {
  const { arrayData, onDelete } = props;

  return (
    <Paper component="ul" className={classes.root}>
      {arrayData?.length > 0 &&
        arrayData.map((data) => {
          return (
            <li key={data.id}>
              <Chip
                label={data.name}
                onDelete={() => onDelete(data.id)}
                className={classes.chip}
              />
            </li>
          );
        })}
    </Paper>
  );
};
