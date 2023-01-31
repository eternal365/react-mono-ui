import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;

const Heading: FC<HeadingProps> = ({ className, ...props }) => (
  <h1 className={cx(styles.root, className)} {...props} />
);

export default Heading;
