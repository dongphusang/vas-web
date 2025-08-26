import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const LeafletMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([46.491572, -80.993265], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([46.491572, -80.993265])
        .addTo(map);
        

    return () => {
      map.remove();
    };
  }, []);

  return <div className="leaflet-style" ref={mapRef}/>;
};

export default LeafletMap;
