import PropTypes from 'prop-types';
import Button from '../Button/Button';

export default function LoadMoreBtn({
  text,
  variant,
  btnType,
  handleLoadMoreClick,
  positionVariant,
}) {
  return (
    <>
      <Button
        text={text}
        variant={variant}
        btnType={btnType}
        handleLoadMoreClick={handleLoadMoreClick}
        positionVariant={positionVariant}
      />
    </>
  );
}

LoadMoreBtn.PropTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  btnType: PropTypes.string,
  handleLoadMoreClick: PropTypes.func,
  positionVariant: PropTypes.string,
};
