import React, { useContext } from 'react';
import { InfoWindow, OverlayView } from '@react-google-maps/api';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { markerSelectContext } from 'features/Map';

//style
const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

const overLayStyle = {
  background: '#C0C0C0',
  border: '1px solid #ccc',
  //Width: '100%',
  height: 300,
  width: 1380,
  //padding: 15
};

//function
const onLoad = (marker: any) => {
  //console.log('marker: ', marker);
};

const getPixelPositionOffset = (width: any, height: any) => ({
  x: -(width / 2),
  y: 100,
  // y: -(height / 4),
});

const Overlay = (props: any) => {
  //style
  const classesForm = useFormStyles();
  const classesButton = useButtonStyles();
  //state
  const [overlay, setOverlay] = useContext<any>(markerSelectContext);
  const onUnmount = React.useCallback(function callback(map) {
    console.log('onUnmount');
  }, []);

  if (props.selectd === 'NG') {
    return <div></div>;
  } else {
    return (
      <div>
        <InfoWindow
          position={overlay.center}
          onLoad={onLoad}
          onCloseClick={() => {
            setOverlay({
              check: 'NG',
            });
          }}
        >
          <Container maxWidth='lg'>
            【TEST】
            <form className={classesForm.root} noValidate autoComplete='off'>
              <div>
                <div style={{ fontSize: '10px' }}>要請元医療機関</div>
                <span>　〇〇総合医療センター</span>
                <div style={{ fontSize: '10px' }}>連絡先</div>
                　000-0000-0000
                <div>
                  <Button
                    variant='contained'
                    size='medium'
                    color='default'
                    className={classesButton.margin}
                    onClick={() => {
                      setOverlay({
                        check: 'NG',
                      });
                    }}
                  >
                    患者詳細情報
                  </Button>
                  <Button
                    variant='contained'
                    size='medium'
                    color='default'
                    className={classesButton.margin}
                    onClick={() => {
                      setOverlay({
                        check: 'NG',
                      });
                    }}
                  >
                    　車内画像　
                  </Button>
                </div>
                <div>
                  <Button
                    variant='contained'
                    size='medium'
                    color='default'
                    className={classesButton.margin}
                    onClick={() => {
                      setOverlay({
                        check: 'NG',
                      });
                    }}
                  >
                    　バイタル　
                  </Button>
                  <Button
                    variant='contained'
                    size='medium'
                    color='default'
                    className={classesButton.margin}
                    onClick={() => {
                      setOverlay({
                        check: 'NG',
                      });
                    }}
                  >
                    　音声記録　
                  </Button>
                </div>
              </div>
            </form>
          </Container>
        </InfoWindow>
        <OverlayView
          onUnmount={onUnmount}
          position={overlay.center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}
        >
          <div style={overLayStyle}>
            <h1>PicView</h1>
          </div>
        </OverlayView>
      </div>
    );
  }
};

export default Overlay;
