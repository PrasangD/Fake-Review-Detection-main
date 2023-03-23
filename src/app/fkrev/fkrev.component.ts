import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FkrevService } from '../fkrev.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { fkrev } from './fkrev';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-fkrev',
  templateUrl: './fkrev.component.html',
  styleUrls: ['./fkrev.component.css']
})
export class FkrevComponent implements OnInit {
  displayedColumns = ['Name', 'Percentage'];
  public myForm: FormGroup;
  public dataSource = {} as MatTableDataSource<fkrev>;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;
  @ViewChild(MatSort) sort = {} as MatSort;
  constructor(private fkrev: FkrevService, private http: HttpClient, private router: Router, private fb: FormBuilder) {
    var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
    this.myForm = fb.group({
      url: ['', [Validators.required, Validators.pattern(URL_REGEXP)]],
      updateOn: 'blur',
    })
    this.dataSource = new MatTableDataSource(this.resp);
  }

  ngOnInit(): void {

  }
  get m() {
    return this.myForm.controls;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public resp = {} as fkrev[];
  public rest = {} as String[];
  public showTable: boolean = false;

  // form: NgForm
  public error !: String;
  public predict(): any {
    console.log(this.myForm.controls['url'].value);
    this.fkrev.predict(this.myForm.controls['url'].value).subscribe(
      (response: fkrev[]) => {
        this.resp = response;
        this.showTable = true;
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.error = String(error);
        this.fkrev.error = this.error;
        this.router.navigateByUrl("/error");
      }
    );
  }

  public refresh():any {
    this.fkrev.refresh().subscribe(
      (response:any)=>{
        console.log(response);
        this.router.navigate(['/home']);
      },(error:HttpErrorResponse)=>{
        console.log(error);
        this.error = String(error);
        this.fkrev.error = this.error;
        this.router.navigateByUrl("/error");
      }
    )
  }

}
