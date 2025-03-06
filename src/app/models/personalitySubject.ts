import { Observable } from "rxjs";
import { PaginatedData } from "./paginatedData";

export class PersonalitySubject<T>{

    private nextMethod!: (value: T) => void;
    constructor(private data: T){}
    
    next(data: T){
        this.data = data;
        if(this.nextMethod){
            this.nextMethod(data);
        }
    }

    asObservable(): Observable<T>{
        return new Observable<T>( (observer) => {
            observer.next(this.data);
            this.nextMethod = (observer.next.bind(observer));
        }); 
    } 
}