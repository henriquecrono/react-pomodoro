import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/henriquecrono.png" alt="HEnrique Przybysz" />
      <div>
        <strong>Henrique Przybysz</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
};

export default Profile;