import { EmployeeModel } from "../../model/employee"
import { TimeModel } from "../../model/time"

export type EmployeeResponse = {
    result: EmployeeModel[]
    total: number
    time: TimeModel
}