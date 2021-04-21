import format from 'date-fns/format';
import enGB from 'date-fns/locale/en-GB';

import styles from './styles.module.scss';

export default function Header() {
  const currentDate = format(new Date(), 'EEE, do MMMM', {
    locale: enGB,
  });
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />
      <p>The best for you to listen, always</p>
      <span>{currentDate}</span>
    </header>
  );
}
