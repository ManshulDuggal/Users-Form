import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Map = ({ detail }) => {
    const mapStyles = {
        height: "40vh",
        width: "60%",
        margin: "auto",

        margin: " auto",
    };

    const defaultCenter = {
        lat: 25,
        lng: 17,
    };

    return (
        <>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={4}
                    center={defaultCenter}
                >
                    {detail.map((cords) => {
                        return (
                            <Marker
                                key={cords.id}
                                position={{
                                    lat: parseFloat(cords.address.geo.lat),
                                    lng: parseFloat(cords.address.geo.lat),
                                }}
                            />
                        );
                    })}
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default Map;
