import { Box, Button } from '@material-ui/core';
import * as React from 'react';

interface Props {
    naKliknieciu: (e: React.SyntheticEvent) => void
  }

  const styles = {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0
  } as React.CSSProperties

const MagicButton = ({naKliknieciu}: Props) => {
  return (
    <div style={styles}>
        <Button variant='contained' onClick={naKliknieciu} fullWidth size="large">
            Magiczny przycisk
        </Button>
    </div>
      
  );
};

export default MagicButton;
