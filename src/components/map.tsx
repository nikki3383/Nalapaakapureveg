import React, { useEffect, useRef, useState } from "react";

/**
 * Ready-to-use Map component.
 * - Fetches Place Details (REST) and then renders map + marker.
 * - Replace inline API key with env var in production.
 */

const API_KEY = "AIzaSyCCquOiELyhfclO0OnN2lMi2pNtZvh2ito"; // <- your testing key
const DEFAULT_PLACE_ID = "ChIJS3FojnyRsDsRZgbhjaM2DiY"; // Nalapaaka

const loadGoogleMapsJs = (key: string): Promise<void> =>
  new Promise((resolve, reject) => {
    if (typeof window === "undefined")
      return reject(new Error("No window"));
    if (window.google && window.google.maps) return resolve();

    // avoid duplicate script tags
    const existing = Array.from(
      document.getElementsByTagName("script"),
    ).find(
      (s) =>
        s.src &&
        s.src.startsWith(
          "https://maps.googleapis.com/maps/api/js",
        ),
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(
          new Error(
            "Existing Google Maps script failed to load",
          ),
        ),
      );
      return;
    }

    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&v=weekly`;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () =>
      reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(s);
  });

interface GoogleMapProps {
  placeId?: string;
  apiKey?: string;
  zoom?: number;
}

const GoogleMap = ({
  placeId = DEFAULT_PLACE_ID,
  apiKey = API_KEY,
  zoom = 15,
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstRef = useRef<google.maps.Map | null>(null);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!placeId) {
      setError("placeId is required");
      setStatus("no placeId");
      return;
    }
    if (!apiKey) {
      setError("API key is required");
      setStatus("no api key");
      return;
    }

    const init = async () => {
      try {
        setStatus("Loading Google Maps JS...");
        await loadGoogleMapsJs(apiKey);
        if (cancelled) return;

        setStatus("Fetching Place details (REST)...");
        const fields = encodeURIComponent(
          "geometry,name,formatted_address",
        );
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
          placeId,
        )}&fields=${fields}&key=${encodeURIComponent(apiKey)}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json = await res.json();
        console.log("Place Details REST response:", json);

        if (cancelled) return;

        if (json.status !== "OK") {
          throw new Error(
            `Places REST status: ${json.status} ${json.error_message || ""}`,
          );
        }

        const place = json.result;
        if (
          !place ||
          !place.geometry ||
          !place.geometry.location
        ) {
          throw new Error("Place details returned no geometry");
        }

        const position = {
          lat: Number(place.geometry.location.lat),
          lng: Number(place.geometry.location.lng),
        };

        // create or reuse map
        if (!mapRef.current) return;
        
        const map =
          mapInstRef.current ||
          new window.google.maps.Map(mapRef.current, {
            center: position,
            zoom,
          });
        mapInstRef.current = map;

        // center & marker
        map.setCenter(position);
        if (!zoom) map.setZoom(16);

        // use AdvancedMarkerElement if available (recommended), otherwise Marker
        try {
          if (
            window.google &&
            window.google.maps &&
            (window.google.maps as any).marker &&
            (window.google.maps as any).marker.AdvancedMarkerElement
          ) {
            new (window.google.maps as any).marker.AdvancedMarkerElement(
              {
                map,
                position,
                title: place.name || undefined,
              },
            );
          } else {
            new window.google.maps.Marker({
              map,
              position,
              title: place.name || undefined,
            });
          }
        } catch (mErr) {
          console.warn("Marker creation error:", mErr);
        }

        setStatus(`Place loaded: ${place.name}`);
        setError(null);
      } catch (err) {
        console.error("GoogleMap error:", err);
        setError(String((err as Error).message || err));
        setStatus("error");
      }
    };

    init();

    return () => {
      cancelled = true;
    };
  }, [placeId, apiKey, zoom]);

  return (
    <div>
      <div
        ref={mapRef}
        className="rounded-lg overflow-hidden border border-[#2a2a2a]"
        style={{
          width: "100%",
          height: 420,
        }}
      />
      <div className="mt-2 text-xs text-gray-500">
        <strong>Status:</strong> {status}
      </div>
      {error && (
        <div className="mt-2 text-xs text-red-500">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
