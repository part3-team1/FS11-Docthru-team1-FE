'use client';

import Link from 'next/link.js';
import * as styles from './NavigationBar.css.js';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LinkButton from '../LinkButton/LinkButton.jsx';

export default function NavigationBar({
  title,
  menus,
  underBar = true,
  hasButton,
}) {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={clsx(styles.row, underBar && styles.underLine)}>
        <div className={styles.container}>
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={clsx(
                styles.menu,
                pathname.startsWith(menu.href) && styles.focused,
                underBar &&
                  pathname.startsWith(menu.href) &&
                  styles.focusedUnderline,
              )}
            >
              {menu.label}
            </Link>
          ))}
        </div>
        {hasButton && <LinkButton preset="apply" href="/challenges/new" />}
      </div>
    </div>
  );
}
