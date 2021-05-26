/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { USUN_ZAZNACZENIE, ZAZNACZ_KONTAKT } from './typy';

export const zaznaczKontaktAkcja = (payload: any) => (przekaz: any, pobierzStan: any) => {
  const {
    kontakty: { zaznaczoneKontakty }
  } = pobierzStan();
  return przekaz({ type: zaznaczoneKontakty.includes(payload) ? USUN_ZAZNACZENIE : ZAZNACZ_KONTAKT, payload });
};
