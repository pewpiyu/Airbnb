import { getCenter } from "geolib";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/piyush45/cks0p2331cu9f17p4pz53j7xk"
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className=" cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>

        {selectedLocation.long === result.long ? (
            <Popup
             onClose={() => setSelectedLocation({})}
             closeOnClick={true}
             latitude={result.lat}
             longitude={result.long}
             >
                 {result.title}
            </Popup>
        ) : false}

        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
