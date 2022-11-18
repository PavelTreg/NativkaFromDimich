export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type StreetType = {
    title: string
}