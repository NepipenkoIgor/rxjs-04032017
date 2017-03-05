// function* a(){
//     let i = 0;
//     yield i++
// }

// let iterator = a();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Observer } from 'rxjs/Observer'
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import 'whatwg-fetch'

// let numbers$ = Observable.create((observer: Observer<string>) => {
//     observer.next('First');
//     observer.next('Second');
//    // observer.error('some error');
//     observer.complete();
// })

// numbers$.subscribe(
//     (res)=>{console.log(res)},
//     (err)=>{console.log(err)},
//     ()=>{console.log('Finish')},

// )
// Observable.of([1,23,4,4,5,5,6,,7,8]).subscribe(res=>console.log(res))

const input = document.querySelector('#search');
const button = document.querySelector('#startSearch');
let subject$$ = new Subject()



subject$$
    .switchMap((searchTerm: string) => Observable.fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`).then(res => res.json())))
    .subscribe((value: any) => {
        console.log(value)
    })



Observable
    .fromEvent(button, 'click')
    .map(()=> (input as HTMLInputElement).value)
    .subscribe((value:string)=>subject$$.next(value))