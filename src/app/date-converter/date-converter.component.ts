// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-date-converter',
//   templateUrl: './date-converter.component.html',
//   styleUrls: ['./date-converter.component.scss']
// })
// export class DateConverterComponent implements OnInit {

//   dateValue!: string;
//   data!:string;
//   atCursor!: string;
//   dates: string[] = ['cursor', 'at']
//   dateValueDecimal!: number
//   constructor(private router: Router,){

//   }
//   ngOnInit(): void {
//     console.log(this.atCursor)
//   }
//   convertToDate(){
//     if(this.atCursor === 'at'){
//       const d = new Date(parseInt(this.dateValue)/1000); // Parameter should be long value
//       this.data = d.toString()
//     }
//     else if(this.atCursor === 'cursor'){
//       this.dateValueDecimal = parseInt(this.dateValue, 16)
//       const d = new Date(this.dateValueDecimal); // Parameter should be long value
//       this.data = d.toString()
//     }
//   }
//   home(){
//     this.router.navigate([''])
//   }
// }
