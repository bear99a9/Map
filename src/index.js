import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { mapAPI } from "./../app.config";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = `${mapAPI}`;

const Map = () => {
	const mapContainer = useRef();
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		return () => map.remove();
	}, []);

	return (
		<div>
			<div className="map-container" ref={mapContainer} />
		</div>
	);
};

ReactDOM.render(<Map />, document.getElementById("app"));
