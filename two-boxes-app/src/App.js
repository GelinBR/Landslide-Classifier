import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import '@arcgis/core/assets/esri/themes/light/main.css'; // ArcGIS CSS
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

const webMapIds = [
  { id: '569f15e3e6e64ef8998cefdcf55d55ad', title: 'River Map' },
  { id: '89604dc183b84b989f64788ad1f1965e', title: 'Fault Lines' }
];

function App() {
  const mapRef = useRef(null);
  const [currentWebMapId, setCurrentWebMapId] = useState(webMapIds[0].id);
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.destroy();
    }

    const webMap = new WebMap({
      portalItem: {
        id: currentWebMapId,
      },
    });

    const view = new MapView({
      container: mapRef.current, // Reference to the div
      map: webMap, // Add the WebMap to the view
      center: [0, 0], // Optional: Set initial center
      zoom: 3, // Optional: Set initial zoom
    });

    viewRef.current = view;

    const handleResize = () => {
      view.resize();
    };

    window.addEventListener('resize', handleResize);

    view.when(() => {
      console.log('WebMap and MapView are successfully loaded.');
    }).catch((err) => {
      console.error('Error initializing MapView:', err);
    });

    return () => {
      if (view) {
        view.destroy(); // Clean up the view
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [currentWebMapId]);

  return (
    <div className="App">
      <div className="title-bar">
        <h1 className="title">Welcome to the WebMap Viewer</h1>
      </div>
      <div className="boxes-container">
        <div className="box box1">
          <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
        </div>
        <div className="box box2">
          <h2>Select a Web Map</h2>
          <select
            value={currentWebMapId}
            onChange={(e) => setCurrentWebMapId(e.target.value)}
          >
            {webMapIds.map((map) => (
              <option key={map.id} value={map.id}>{map.title}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
