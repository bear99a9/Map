import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { mapAPI } from "./../app.config";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = `${mapAPI}`;

const Map = () => {};

ReactDOM.render(<Map />, document.getElementById("app"));
