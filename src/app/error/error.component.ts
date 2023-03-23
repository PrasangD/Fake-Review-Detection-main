import { Component, OnInit } from '@angular/core';
import { FkrevService } from '../fkrev.service';
import { FkrevComponent } from '../fkrev/fkrev.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public errorRes!:String;
  constructor(private fkrev:FkrevService) { 
    this.errorRes = this.fkrev.error;
  }
  ngOnInit(): void {
  }

}
