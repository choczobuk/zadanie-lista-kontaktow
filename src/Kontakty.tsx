/* eslint-disable no-undef */
import React, { memo, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ZnajdzKontakt from './komponenty/ZnajdzKontakt';
import Tytul from './komponenty/Tytul';
import { useKontakty } from './logika/useKontakty';
import Kontakt from './komponenty/Kontakt';
import { Box } from '@material-ui/core';
import MagicButton from './komponenty/Button';
import 'react-virtualized/styles.css';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List, { ListRowRenderer } from 'react-virtualized/dist/commonjs/List';

export interface IKontakt {
  first_name: string,
  last_name: string,
  avatar: string,
  email: string,
  id: number & string
}

const styles = {
  List: {
    border: '1px solid #e0e0e0'
  },
  Wrapper: {
    flex: '1 1 auto',
    height: '100%',
    width: '100%'
  }
}

const Kontakty = () => {
  const {
    gotowosc,
    filtrujKontakt,
    filtrujNazwe,
    zaznaczoneKontakty,
    lista,
    zrobMagie
  } = useKontakty()

  const rowRender = useCallback(({index, key, style}: any) => {
    const kontakt = lista[index];
    return (
      <Kontakt
          key={key}
          kontakt={kontakt}
          naKliknieciu={filtrujKontakt}
          zaznaczone={zaznaczoneKontakty.includes(kontakt.id)}
          style={style}
        />
    )
  }, [lista])

  return (
    <Box className="contacts">
      <Tytul />
      <ZnajdzKontakt naZmiane={filtrujNazwe} />
      <Box className="contacts__content">
        {!gotowosc && <CircularProgress className="contacts__loader" />}

        <Box style={styles.Wrapper}>
          <AutoSizer>
              {({width, height}) => (
                <List
                  style={styles.List}
                  height={height}
                  rowCount={lista.length}
                  rowHeight={75}
                  rowRenderer={rowRender}
                  width={width}
                />
              )}
            </AutoSizer>
        </Box>

        {gotowosc && !lista.length &&
          <MagicButton naKliknieciu={zrobMagie} />
        }
      </Box>
    </Box>
  );
};

export default memo(Kontakty);
