// import React from 'react'
// import {
//     withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     Marker
// } from "@react-google-maps/api";

// const Map = ({ coords }) => {
//     return (
//         <>
//             {coords.lat && coords.lng && <GoogleMap
//                 defaultZoom={14}
//                 defaultCenter={{ lat: 21.027763, lng: 105.834160 }}
//                 center={coords}

//             >
//                 <Marker
//                     position={coords}
//                 />
//             </GoogleMap>}
//         </>
//     )
// }

// export default withScriptjs(withGoogleMap(Map))
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = ({ coords }) => {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            {coords.lat && coords.lng && (
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '400px',
                    }}
                    zoom={14}
                    center={coords}
                >
                    <Marker position={coords} />
                </GoogleMap>
            )}
        </LoadScript>
    );
}

export default Map;
