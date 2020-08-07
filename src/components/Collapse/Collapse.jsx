import React from 'react';
import PropTypes from 'prop-types';
import styled from './Collapse.module.css';
import ChevronIcon from '../../icon/ChevronIcon/ChevronIcon';

const Collapse = (props) => {
  const { collapsedLabel = 'Подробнее', expandedLabel = 'Скрыть', isExpanded, onExpandedChange, children } = props;
  const iconRotateDeg = isExpanded ? 0 : 180;

  return (
    <>
      <div
        style={{ maxHeight: isExpanded ? 200 : 0 }}
        className={styled.children}
      >
        {children}
      </div>
      <div className={styled.switch}>
        <button className={styled.switch__button} onClick={onExpandedChange}>
          {isExpanded ? expandedLabel : collapsedLabel}
        </button>
        <div className={styled.switch__icon}>
          <ChevronIcon degTransform={iconRotateDeg} />
        </div>
      </div>
    </>
  );
};

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool.isRequired,
  onExpandedChange: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Collapse;
