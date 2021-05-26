import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import * as React from 'react';

const Title = () => {
  return (
    <div className="contacts__title">
      <PermContactCalendarIcon className="contacts__title-icon" />
      <span className="contacts__label">Kontakty</span>
    </div>
  );
};

export default Title;
