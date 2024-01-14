import styles from "./UserDetails.module.css";

function UserDetails() {
  return (
    <div className={styles.userDetails}>
      <div className={styles.favicon}></div>
      <div>
        <h3>David James</h3>
        <p>Worker</p>
      </div>
    </div>
  );
}

export default UserDetails;
