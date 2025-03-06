import { Employee } from "./Employee";

export class PaginatedData{
    constructor(
        public pageNumber: number,
        public pageSize : number,
        public totalCount: number,
        public totalPages: number,
        public employees: Employee[]
    ){}
}