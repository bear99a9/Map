import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { mapAPI } from "./app.config";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = `${mapAPI}`;

const Map = () => {
	const mapContainer = useRef();
	const [lng, setLng] = useState(-2.2446022);
	const [lat, setLat] = useState(51.3498525);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		map.on("move", () => {
			setLng(map.getCenter().lng.toFixed(4));
			setLat(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));
		});
		return () => map.remove();
	}, []);

	return (
		<div>
			<div className="sidebar">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>
			<div className="map-container" ref={mapContainer} />
		</div>
	);
};

ReactDOM.render(<Map />, document.getElementById("app"));
