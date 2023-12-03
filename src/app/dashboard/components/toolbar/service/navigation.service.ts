import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class NavigationService {
    private pageTitleSubject = new BehaviorSubject<string>('Default Title');
    pageTitle$ = this.pageTitleSubject.asObservable();

    setPageTitle(title: string): void{
        this.pageTitleSubject.next(title)
    }
}