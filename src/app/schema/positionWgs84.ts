export interface PositionWgs84 {
    /**
     * in meters above sea level.
     */
    alt: number;
    /**
     * in degrees, azimuth compass bearing (0 north, 90 east, ...).
     */
    dir: number;
    /**
     * required for 4 dot value referencing
     */
    id: string;
    /**
     * in degrees, range [-90 .. 90].
     */
    lat: number;
    /**
     * in degrees, range [-180 .. 180].
     */
    lon: number;
  }
  