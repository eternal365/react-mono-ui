import { FC } from 'react';

import { Container } from 'components';

import styles from './styles.module.scss';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => (
  <header className={styles.root}>
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <a className={styles.link} href="/">{title}</a>
      </Container>
    </div>
  </header>
);

export default Header;
