import * as typy from './typy';
import { IKontakt } from '../Kontakty';

export const kontaktyPoczatkowyStan = {
  listaKontaktow: [],
  bledy: [],
  zaznaczoneKontakty: []
};

const kontakty = (stan = kontaktyPoczatkowyStan, { type, payload }: { type: string, payload: any}) => {
  switch (type) {
    case typy.POBIERZ_KONTAKTY: {
      return { ...stan, listaKontaktow: payload.sort((a: IKontakt, b: IKontakt) => a.last_name.localeCompare(b.last_name)) };
    }
    case typy.POBIERZ_KONTAKTY_BLAD: {
      return { ...stan, error: payload };
    }
    case typy.ZAZNACZ_KONTAKT: {
      return { ...stan, zaznaczoneKontakty: [...stan.zaznaczoneKontakty, payload] };
    }
    case typy.USUN_ZAZNACZENIE: {
      return { ...stan, zaznaczoneKontakty: stan.zaznaczoneKontakty.filter(id => id !== payload) };
    }
    default: {
      return stan;
    }
  }
};

export default kontakty;
