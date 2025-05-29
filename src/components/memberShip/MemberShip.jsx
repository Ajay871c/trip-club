import React from 'react'
import styles from "./membership.module.css"

const MemberShip = () => {
  return (
    <div className={styles.option}>
      <h1 className={styles.optionTitle}>Membership & Pricing</h1>
      <p className={styles.optionDesc}>No shady charges, no unexpected shocks! Stick to one flat fee, month after month. <br/>No money surprises here!</p>
      <a href="/" className="btn">Explore all prices</a>
    </div>
  )
}

export default MemberShip
