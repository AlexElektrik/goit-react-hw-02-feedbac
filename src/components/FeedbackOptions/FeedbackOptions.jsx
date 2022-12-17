import React from 'react';
import { ButtonList, FeedbackButton } from './FeedbackOptionsStyles';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option, index) => (
        <FeedbackButton key={index} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
