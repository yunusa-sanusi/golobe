import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export type NavItemProps = {
  url: string;
  text: string;
  additionalStyle?: string;
  icon?: ReactElement<IconType>;
};
