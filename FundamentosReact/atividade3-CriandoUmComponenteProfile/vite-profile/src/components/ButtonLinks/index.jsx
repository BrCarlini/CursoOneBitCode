import styles from "./styles.module.css"

export default function ButtonLink(props) {
    return (
        <a className={styles.button} href={props.link} target="_blank">{props.title}</a>
    )
}