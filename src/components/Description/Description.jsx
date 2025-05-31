import PropTypes from 'prop-types';

import Heading from '../Heading/Heading';
import css from './Description.module.css';

export default function Description({ title, description }) {
  return (
    <div>
      {title && <Heading variant="header1">{title}</Heading>}
      {description && <p className={css.description}>{description}</p>}
    </div>
  );
}

Description.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
