import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public formG: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formG = this.formBuilder.group({
      searchControl: [null, [Validators.required]],
    });
    this.route.queryParams
      .pipe(filter(({ search }) => !!search))
      .subscribe(({ search }) => this.searchControl.patchValue(search));
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
