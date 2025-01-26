import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as EL from 'esri-leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function FeatureLayer() {
  const map = useMap();

  React.useEffect(() => {
    const featureLayer = EL.featureLayer({
      url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/LA_County_Boundaries/FeatureServer/0'
    });

    featureLayer.addTo(map);

    return () => {
      map.removeLayer(featureLayer);
    };
  }, [map]);

  return null;
}

function App() {
  return (
    <div className="App">
      <div className="title-bar">
        <h1 className="title">Welcome to the Landslide Classifier</h1>
      </div>
      <div className="boxes-container">
        <div className="box box1">
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <FeatureLayer />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A sample marker.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="box box2">Box 2</div>
      </div>
    </div>
  );
}

export default App;
