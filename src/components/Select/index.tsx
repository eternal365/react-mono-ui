import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

import Group from './Group';
import Option from './Option';

type SelectProps = ComponentPropsWithoutRef<'select'>;

const Select: FC<SelectProps> = ({ className, ...props }) => (
  <select className={cx(styles.root, className)} {...props} />
);

export default Object.assign(Select, { Group, Option });
