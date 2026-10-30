import styles from "./ProductCard.module.css";

export default function ProductCard({nome, prezo}) {
  return (
    <div className={styles.produto}>
        {nome} <hr />
        {prezo}
    </div>
  )
}

 