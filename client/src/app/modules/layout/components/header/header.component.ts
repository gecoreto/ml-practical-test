import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public formG: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formG = this.formBuilder.group({
      searchControl: [null, [Validators.required]],
    });
  }

  public search(): void {
    this.router.navigate(['/items'], {
      queryParams: { search: this.searchControl.value },
    });
  }

  get searchControl(): AbstractControl {
    return this.formG.get('searchControl');
  }
}
