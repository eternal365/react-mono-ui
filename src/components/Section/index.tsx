import { ComponentPropsWithoutRef, FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

type SectionProps = ComponentPropsWithoutRef<'section'>;

const Section: FC<SectionProps> = ({ className, ...props }) => (
  <section className={cx(styles.root, className)} {...props} />
);

export default Section;
