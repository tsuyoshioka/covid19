export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  // strokeColor: '#5a8055',
  // fillColor: '#1b4d30'
  strokeColor: '#436588',
  fillColor: '#2b4a88'
}

const surfaceStyleB: SurfaceStyle = {
  // strokeColor: '#5a8055',
  // fillColor: '#00a040',
  strokeColor: '#345488',
  fillColor: '#1d5088'
}

const surfaceStyleC: SurfaceStyle = {
  // strokeColor: '#5a8055',
  strokeColor: '#5c6880',
  fillColor: '#c5e2c6'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleB]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
