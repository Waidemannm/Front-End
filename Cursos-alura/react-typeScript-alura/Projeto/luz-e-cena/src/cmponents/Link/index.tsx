import styles from './Link.module.css';
import type { LinkProps } from '../../types/LinkProps';

export default function Link({children, ...rest}: LinkProps){
    return(
        <a className={styles.link} {...rest}>{children}</a>
    );
}