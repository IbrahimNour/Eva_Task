import { BaseForm } from './../../../base/base-form';
import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from 'src/app/core/model/countries.model';
import { map, mergeMap, tap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent
  extends BaseForm
  implements OnInit, OnDestroy
{
  formType!: string;
  country!: Country;
  subscription!: Subscription;
  constructor(
    protected readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly countryService: CountriesService,
    private readonly route: ActivatedRoute
  ) {
    super(location);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
    });

    this.subscription = this.route.queryParams
      .pipe(
        map((params) => params.id),
        tap((id) => console.log(id)),
        mergeMap((id) => {
          if (id) {
            return this.countryService.getCountry(id);
          }
          return of(null);
        })
      )
      .subscribe((res) => {
        console.log('response => ', res);
        if (res) {
          this.country = res;
          this.formType = 'Edit';
          this.form.patchValue({
            name: res.name,
          });
        } else {
          this.formType = 'Create';
        }
      });
  }

  onSubmitted(): void {
    console.log(this.form.value);

    if (this.formType == 'Edit') {
      this.countryService.editCountry(this.form.value).subscribe((res) => {
        console.log(res);
        this.cancel();
      });
      return;
    }
    this.countryService.addCountry(this.form.value).subscribe((res) => {
      console.log(res);
      this.cancel();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
