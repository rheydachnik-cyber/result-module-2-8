import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';

function FieldLayout({ field, onCellClick }) {
  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={`${styles.cell} ${cell === 'X' ? styles.x : ''} ${cell === '0' ? styles.zero : ''}`}
          onClick={() => onCellClick(index)}
          disabled={cell !== ''}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;