import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type ContainerProps = ComponentPropsWithoutRef<'div'>;

const Container: FC<ContainerProps> = ({ className, ...props }) => (
  <div className={cx(styles.root, className)} {...props} />
);

export default Container;
