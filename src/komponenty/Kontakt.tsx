/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, {useCallback, memo, CSSProperties} from 'react';
import clsx from 'clsx';
import Avatar from './Avatar';

interface Props {
  kontakt: {
    first_name: string,
    last_name: string,
    avatar: string,
    email: string,
    id: number
  }
  zaznaczone: boolean,
  naKliknieciu: (argument: number) => void,
  style: CSSProperties
}

const Kontakt = ({
  kontakt: { first_name: imie, last_name: nazwisko, avatar, email, id: identyfikator },
  naKliknieciu, zaznaczone, style
}: Props) => {

  const klikniecie = useCallback(e => naKliknieciu(identyfikator), [identyfikator])

  return (
    <div 
    className={clsx('contact', zaznaczone && 'contact--selected')} 
    onClick={klikniecie}
    role="button"
    style={style}
    >
      <Avatar imie={imie} nazwisko={nazwisko} avatar={avatar} zaznaczone={zaznaczone} />
      <div className="personal-data">
        <div className="personal-data__full-name">{`${imie} ${nazwisko}`}</div>
        <div className="personal-data__email">{email}</div>
      </div>
    </div>
  );
};

export default memo(Kontakt);
