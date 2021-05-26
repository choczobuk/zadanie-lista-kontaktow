import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { zaznaczKontaktAkcja } from '../reduks/kreatoryAkcji';
import { POBIERZ_KONTAKTY, POBIERZ_KONTAKTY_BLAD } from '../reduks/typy';
import { IKontakt } from '../Kontakty';

interface RozszerzonyDomyslnyTypDlaReduksa extends DefaultRootState {
  kontakty: {
    zaznaczoneKontakty: string[]
    listaKontaktow: IKontakt[]
  }
}

export const useKontakty = () => {
  const [filtr, ustawFiltr] = useState('');
  const [gotowosc, ustawGotowosc] = useState(false);
  const przekaz = useDispatch()
  const { zaznaczoneKontakty, listaKontaktow } = useSelector((stan: RozszerzonyDomyslnyTypDlaReduksa) => stan.kontakty)


  useEffect(() => {
    fetch(`https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`)
      .then(response => response.json())
      .then(dane => przekaz({ type: POBIERZ_KONTAKTY, payload: dane }))
      .catch(blad => przekaz({ type: POBIERZ_KONTAKTY_BLAD, payload: blad }))
      .finally(() => ustawGotowosc(true))
  }, []);


  const filtrujNazwe = useCallback(e => ustawFiltr(e.target.value), []);
  const filtrujKontakt = useCallback(identyfikator => przekaz(zaznaczKontaktAkcja(identyfikator)), [zaznaczoneKontakty])

  const filtrujPrzezNazwe = useCallback((tablica: IKontakt[], filtr: string) => {
    const lacznik = new RegExp(filtr, 'i');

    return tablica.filter(({ first_name, last_name }) => lacznik.test(first_name) || lacznik.test(last_name));
  }, []);

  const zrobMagie = useCallback(e => {
    alert('choczobuk'.reverse())
    ustawFiltr('')
  }, []);

  const lista = useMemo(() => {
    return filtrujPrzezNazwe(listaKontaktow, filtr) || []
  }, [listaKontaktow, filtr])


  return {
    gotowosc,
    filtrujKontakt,
    filtrujNazwe,
    zaznaczoneKontakty,
    lista,
    filtrujPrzezNazwe,
    zrobMagie
  };
};
