import PropTypes from 'prop-types';

import css from './Contact.module.css';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowClockwise } from 'react-icons/bs';

export default function Contact({ id, name, number, avatar, onDelete }) {
  return (
    <>
      <li className={css.contactWrap}>
        <div className={css.avatar}>
          <img src={avatar} width={24} />
        </div>
        <div className={css.nameList}>
          <div className={css.nameLine}>
            <p>{name}</p>
          </div>
          <div className={css.numberLine}>
            <IoPhonePortraitOutline size={12} />
            <p>{number}</p>
          </div>
        </div>
        <div className={css.buttonsWrap}>
          <ButtonIcon
            variant="contactUpdateBtn"
            type="button"
            icon={BsArrowClockwise}
            iconVariant="updateIcon"
            iconSize={20}
            green
          />
          <ButtonIcon
            variant="contactDeleteBtn"
            type="button"
            icon={RxCross1}
            iconVariant="deleteIcon"
            iconSize={20}
            onDelete={onDelete}
            red
            id={id}
          />
        </div>
      </li>
    </>
  );
}

Contact.PropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  avatar: PropTypes.string,
  onDelete: PropTypes.func,
};
