import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: ${theme.spacing(0.5)}px;
  margin: 0;
`;

export const chip = css`
  margin: ${theme.spacing(0.5)}px;
`;
