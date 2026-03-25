'use client';

import Link from 'next/link.js';
import * as styles from './NavigationBar.css.js';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavigationBar({ title, menus, underBar = true }) {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <div
        className={clsx(styles.container, underBar && styles.underLine)}
      >
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={clsx(
              styles.menu,
              pathname.startsWith(menu.href) && styles.focused,
              underBar && styles.focusedUnderline
            )}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
