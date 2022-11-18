import styles from './styles.module.scss'

export function Header () {
    return (
        <header className={styles.Header}>
            <div className="Header-Menu">
                <div className="Header-Menu__Back-Link"><a href="#" className="Header-Menu__Link-Item">Back</a></div>
            </div>
        </header>
    )
}