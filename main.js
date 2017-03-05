// function* a(){
//     let i = 0;
//     yield i++
// }
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let iterator = a();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("whatwg-fetch");
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
Observable_1.Observable
    .fromEvent(input, 'input')
    .debounceTime(500)
    .map((event) => event.target.value)
    .switchMap((searchTerm) => Observable_1.Observable.fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)))
    .subscribe((value) => {
    console.log(value);
});
