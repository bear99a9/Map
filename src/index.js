import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { mapAPI } from "./../app.config";
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
	"pk.eyJ1IjoiYmVhcjk5YTkiLCJhIjoiY2tuajExbHhiMGZiaDJwcDhtYmhiMmV5NiJ9.c9EKTo-Ej1RuD_xuipTTgQ";
