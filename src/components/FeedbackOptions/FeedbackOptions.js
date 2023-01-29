import PropTypes from 'prop-types';
import { ContainerOptions, ButtonOptions } from './FeedbackOptions.styled';


export function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
    <ContainerOptions>
      {options.map(name => (
        <ButtonOptions key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </ButtonOptions>
      ))}
    </ContainerOptions>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
