/** @format */

export function convertWindSpeed(speedInMetersPerSecond: number): string {
    const speedInKilometersPerHour = speedInMetersPerSecond * 3.6; // conversion from m/s to k/m
    return `${speedInKilometersPerHour.toFixed(0)}km/h`;
}