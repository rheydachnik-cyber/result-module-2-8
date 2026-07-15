import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';

function InformationLayout({ status }) {
  const getStatusClass = () => {
    if (status.includes('Победа')) {
      return styles.winner;
    }
    if (status.includes('Ничья')) {
      return styles.draw;
    }
    return styles.turn;
  };

  return (
    <div className={`${styles.information} ${getStatusClass()}`}>
      {status}
    </div>
  );
}

InformationLayout.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InformationLayout;