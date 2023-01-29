
import PropTypes from 'prop-types';

export function SectionTitle({label, children}) {
  return (
    <>
      <h2>{label}</h2>
      {children}
    </>
  );
}
SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};
