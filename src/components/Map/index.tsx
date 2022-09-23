import React, { useRef, useMemo, FC } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { mapProps } from "./map.types";

const Map: FC<mapProps> = (props) => {
  const { center, setNewPosition = () => {} } = props;

  function DraggableMarker() {
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker: any = markerRef.current;
          if (marker != null) {
            setNewPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={center}
        ref={markerRef}
      />
    );
  }
  return (
    <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  );
};

export default Map;
