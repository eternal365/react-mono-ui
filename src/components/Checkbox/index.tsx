import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';
import { v4 as uuid } from 'uuid';

import styles from './styles.module.scss';

type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

const Checkbox: FC<CheckboxProps> = ({
  className,
  id,
  children,
  ...props
}) => {
  const key = id ?? uuid();

  return (
    <div className={cx(styles.root, className)}>
      <input
        className={styles.input}
        type="checkbox"
        id={key}
        {...props}
      />
      <label className={styles.label} htmlFor={key}>{children}</label>
    </div>
  );
};

export default Checkbox;
