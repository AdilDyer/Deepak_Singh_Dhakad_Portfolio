import React from 'react';
import styles from '../app/page.module.css';

interface DoodleProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PillDoodle = ({ className, style }: DoodleProps) => (
  <svg className={`${styles.doodle} ${className}`} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 15 35 L 35 15 A 10 10 0 0 1 45 25 L 25 45 A 10 10 0 0 1 15 35 Z" className={styles.drawPath} />
    <path d="M 25 25 L 35 35" className={styles.drawPath} />
  </svg>
);

export const CrossDoodle = ({ className, style }: DoodleProps) => (
  <svg className={`${styles.doodle} ${className}`} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 20 10 L 30 10 L 30 20 L 40 20 L 40 30 L 30 30 L 30 40 L 20 40 L 20 30 L 10 30 L 10 20 L 20 20 Z" className={styles.drawPath} />
  </svg>
);

export const DocumentDoodle = ({ className, style }: DoodleProps) => (
  <svg className={`${styles.doodle} ${className}`} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 5 L 25 5 L 35 15 L 35 45 L 10 45 Z" className={styles.drawPath} />
    <path d="M 25 5 L 25 15 L 35 15" className={styles.drawPath} />
    <path d="M 15 25 L 30 25 M 15 32 L 30 32 M 15 39 L 24 39" className={styles.drawPath} />
  </svg>
);

export const FlaskDoodle = ({ className, style }: DoodleProps) => (
  <svg className={`${styles.doodle} ${className}`} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 20 10 L 20 20 L 10 35 A 5 5 0 0 0 15 40 L 35 40 A 5 5 0 0 0 40 35 L 30 20 L 30 10 Z" className={styles.drawPath} />
    <path d="M 15 10 L 35 10" className={styles.drawPath} />
    <path d="M 15 30 L 35 30" className={styles.drawPath} />
  </svg>
);

export const DNAHelixDoodle = ({ className, style }: DoodleProps) => (
  <svg className={`${styles.doodle} ${className}`} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 15 10 C 15 25 35 25 35 40 M 35 10 C 35 25 15 25 15 40" className={styles.drawPath} />
    <path d="M 18 15 L 32 15 M 25 25 L 25 25 M 18 35 L 32 35" className={styles.drawPath} />
  </svg>
);
