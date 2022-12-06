import React, { createContext, useState, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from '@react-google-maps/api';
//components
import Overlay from './components/Overlay';
//tryout 画面をセパレートすることになったら参考にする
//import PicView from './components/PicView';

//style
import { mapStyles } from './mapstyles';
//icon
import enkIcon from './svg/enk.svg';
import hospIcon from './svg/hosp.svg';
import carIcon from './svg/car.svg';
//Need to set google API key in env file
const env: any = process.env.REACT_APP_googleMapsApiKey;

interface overtype {
  check: string;
  center: {
    lat: number;
    lng: number;
  };
}

//style
const mapContainerStyle = {
  height: '800px',
  width: '100%',
  //height: "60vh",
};
//map option
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
//add ./components/overlay.tsx
export const markerSelectContext: any = createContext([
  { check: 'NG', center: { lat: 35.653931, lng: 139.701746 } },
  () => {},
]);
//function
const onLoad = (marker: any) => {};
//消さない　get longitude latitude
const onClick = (...args: any) => {};
function Map() {
  //state
  const [center, setCenter] = useState({ lat: 35.653931, lng: 139.701746 });
  const [overlay, setOverlay] = useState<overtype>({
    check: 'NG',
    center: { lat: 35.653931, lng: 139.701746 },
  });
  const [date, setDate] = useState<any>(new Date());
  const [routePath, setRoutePath] = useState([
    { lat: 35.653931, lng: 139.701746 },
  ]);
  const [count, setCount] = useState<number>(0);
  //longitude latitude
  let path = [
    { lat: 35.65420947607898, lng: 139.70101077248165 },
    { lat: 35.653363853559824, lng: 139.70135409523556 },
    { lat: 35.6519079670104, lng: 139.70201928307125 },
    { lat: 35.65073975142853, lng: 139.70325572893574 },
    { lat: 35.64994949219658, lng: 139.70254613269648 },
    { lat: 35.64936537222022, lng: 139.70234228481135 },
    { lat: 35.648772529668, lng: 139.70203338040827 },
    { lat: 35.64748764602425, lng: 139.70187170908406 },
    { lat: 35.64661579672711, lng: 139.7024343062954 },
    { lat: 35.646275772922344, lng: 139.70178347221227 },
    { lat: 35.64579953228483, lng: 139.7014969386053 },
    { lat: 35.64463122737382, lng: 139.70137892140863 },
    { lat: 35.64271851405245, lng: 139.7007105886063 },
    { lat: 35.64094398914234, lng: 139.70225931508364 },
    { lat: 35.641946686188774, lng: 139.70382572514833 },
  ];
  //route function
  useEffect(() => {
    const consoleDistance = () => {
      //console.log(getDistance());
    };
    const timer = setInterval(() => {
      setDate(new Date());
      setCount((prev) => prev + 1);
      if (typeof path[count] !== 'undefined') {
        setRoutePath(routePath.concat(path[count]));
      }
      consoleDistance();
    }, 1000);

    /*     const initialDate: any = new Date(); */
    /*     const differentInTime = (initialDate - date) / 1000; */
    /*     return differentInTime * velocity; */
    /* }; */
    return () => clearInterval(timer);
  }, [path, date, count, routePath]);

  //maker position
  const places = [
    {
      info: 'テキストで表示される',
      icon: enkIcon,
      location: { lat: 35.653931, lng: 139.701746 },
    },
    {
      info: 'テキストで表示される',
      icon: hospIcon,
      location: { lat: 35.641618, lng: 139.7043 },
    },
  ];
  return (
    <div>
      <div>{date.toLocaleTimeString()}</div>
      <LoadScript googleMapsApiKey={env}>
        <GoogleMap
          id='marker-example'
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
          options={options}
          onClick={onClick}
          onLoad={(map) => {}}
          onUnmount={(map) => {}}
        >
          {routePath && (
            <>
              <Polyline
                path={routePath}
                options={{
                  strokeColor: '#ff2527',
                  strokeOpacity: 0.75,
                  strokeWeight: 2,
                  icons: [
                    {
                      offset: '0',
                      repeat: '20px',
                    },
                  ],
                }}
              />
              <Marker
                onLoad={onLoad}
                draggable={true}
                position={routePath[routePath.length - 1]}
                icon={carIcon}
              />
            </>
          )}
          {places.map((marker) => (
            <Marker
              key={`${marker.location.lat}-${marker.location.lng}`}
              onLoad={onLoad}
              draggable={true}
              position={{
                lat: marker.location.lat,
                lng: marker.location.lng,
              }}
              icon={marker.icon}
              onClick={() => {
                setCenter({
                  lat: marker.location.lat,
                  lng: marker.location.lng,
                });
                setOverlay({
                  check: 'OK',
                  center: {
                    lat: marker.location.lat,
                    lng: marker.location.lng,
                  },
                });
              }}
            />
          ))}
          <markerSelectContext.Provider value={[overlay, setOverlay]}>
            <Overlay selectd={overlay.check} />
          </markerSelectContext.Provider>
        </GoogleMap>
      </LoadScript>
      {/* picviewコンポーネント*/}
    </div>
  );
}
export default React.memo(Map);
