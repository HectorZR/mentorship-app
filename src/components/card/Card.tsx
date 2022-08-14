/** @jsxImportSource @emotion/react */
import {
  css,
  Card as MuiCard,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { CardProps, ColorOptions } from './Card.types';

const colorOptions: ColorOptions[] = [
  'coral',
  'burlywood',
  'cyan',
  'darkgray',
  'cornsilk',
  'darkseagreen',
];

export const Card = ({ name, url }: CardProps) => {
  const [color, setColor] = useState<ColorOptions>(colorOptions[0]);

  const handleColorClick = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  return (
    <MuiCard
      css={css`
        background-color: ${color};
        cursor: pointer;
      `}
      onClick={handleColorClick}
    >
      <CardContent>
        <Typography>{name}</Typography>
        <Link target="_blank" href={url}>
          {url}
        </Link>
      </CardContent>
    </MuiCard>
  );
};
