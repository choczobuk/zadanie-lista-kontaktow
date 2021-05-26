import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


interface Props {
  zaznaczone: boolean,
  avatar: string,
  imie: string,
  nazwisko: string
}

const Avatar = ({ zaznaczone, avatar, imie, nazwisko }: Props) => {
  if (zaznaczone) {
    return (
      <Checkbox
        className="contact__avatar"
        checked={zaznaczone}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    );
  }
  if (avatar) return <img src={avatar} alt={`${imie} ${nazwisko} avatar`} className="contact__avatar" />;
  return <span className="contact__avatar">{`${imie[0]}${nazwisko[0]}`}</span>;
};


export default React.memo(Avatar);
