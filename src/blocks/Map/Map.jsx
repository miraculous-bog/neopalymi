import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import styles from './map.module.scss';
import geoUrl from '../../helper/UA_FULL_Ukraine.geojson';

// Дані для точок
const markers = [
  { name: "Київ", coordinates: [30.5238, 50.4547] },
  { name: "Львів", coordinates: [24.0316, 49.842] },
  { name: "Одеса", coordinates: [30.7326, 46.4775] }
];

const Map = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className={styles.container}>
      <ComposableMap 
        projection="geoMercator" 
        width={800} 
        height={600} 
        projectionConfig={{ scale: 2000, center: [31, 49] }} 
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo}
                onMouseEnter={() => setHoveredRegion(geo.properties.name)} 
                onMouseLeave={() => setHoveredRegion(null)}
                style={{
                  default: { fill: "#2D9CDB", outline: "none", stroke: "#FFFFFF", strokeWidth: 0.5 },
                  hover: { fill: "#2A7BB8", outline: "none", stroke: "#FFFFFF", strokeWidth: 0.75 },
                  pressed: { fill: "#2A7BB8", outline: "none", stroke: "#FFFFFF", strokeWidth: 0.75 },
                }}
              />
            ))
          }
        </Geographies>
        
        {/* Додавання точок */}
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={5} fill="#FF5722" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Текстовий блок, який з'являється при наведенні */}
      {hoveredRegion && (
        <div className={styles.hoveredRegion}>
          <p>{hoveredRegion}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
