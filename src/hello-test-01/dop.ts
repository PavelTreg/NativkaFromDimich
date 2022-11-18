import {CityType, GovernmentBuildingsType, HouseType} from "./02";

export const addMoneyToBudget = (govBuild: GovernmentBuildingsType, budget: number) => {
    govBuild.budget += budget
}
export const repairHouse = ( hous: HouseType) => {
    hous.repaired = true

}
export function toFireStaff(govBuildType: GovernmentBuildingsType, staffCount: number) {
    govBuildType.staffCount -= staffCount

}
export function toHireStaff(govBuildType: GovernmentBuildingsType, staffCount: number) {
    govBuildType.staffCount += staffCount

}
export function messageForPeople(props: CityType) {
    return ' Hello ' + props.title + ', with '+ props.citizensNumber + ' people'
}