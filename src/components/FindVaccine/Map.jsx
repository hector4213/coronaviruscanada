import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      className="h-full w-full"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/hector4213/ckmnso0et2kwu17nry64cn5bo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGVjdG9yNDIxMyIsImEiOiJja21tcmYzbTkwNDhiMm9td2JrNHRzejc0In0.XmU3r47TYhsm9wbLyS1qJA"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
