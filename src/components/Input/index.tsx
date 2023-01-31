import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type InputProps = ComponentPropsWithoutRef<'input'>

const Input: FC<InputProps> = ({ className, ...props }) => (
  <input className={cx(styles.root, className)} {...props} />
);

export default Input;
