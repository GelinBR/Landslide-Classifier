import React, { useEffect, useRef } from 'react';
import './App.css';
import '@arcgis/core/assets/esri/themes/light/main.css'; // ArcGIS CSS
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    const webMap = new WebMap({
      portalItem: {
        id: '569f15e3e6e64ef8998cefdcf55d55ad', // Your WebMap ID here
      },
    });

    const view = new MapView({
      container: mapRef.current, // Reference to the div
      map: webMap, // Add the WebMap to the view
      center: [0, 0], // Optional: Set initial center
      zoom: 3, // Optional: Set initial zoom
    });

    const handleResize = () => {
      if (view) {
        view.resize();
      }
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
  }, []);

  return (
    <div className="App">
      <div className="title-bar">
        <h1 className="title">Welcome to the Landslide Classifier</h1>
      </div>
      <div className="boxes-container">
        <div className="box box1">
          <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
        </div>
        <div className="box box2">Box 2</div>
      </div>
    </div>
  );
}

export default App;
