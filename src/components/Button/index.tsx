import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  outlined?: boolean;
};

const Button: FC<ButtonProps> = ({
  className,
  outlined,
  ...props
}) => (
  <button
    className={cx(
      styles.root,
      outlined && styles.root_outlined,
      className,
    )}
    {...props}
  />
);

export default Button;
