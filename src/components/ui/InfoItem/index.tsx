import styles from './InfoItem.module.css'; 

type Props = {
  label: string;
  value: string | null;
};

const InfoItem = ({ label, value }:Props) => {
  if (!value) return null; 

  return (
    <p className={styles.text}>
      <span className={styles.subtitle}>{label}:</span> {value}
    </p>
  );
};

export default InfoItem;