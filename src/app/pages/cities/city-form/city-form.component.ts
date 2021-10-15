import { CityService } from 'src/app/core/services/cities/city.service';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { BaseForm } from './../../../base/base-form';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/app/core/model/countries.model';
import { of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { City } from 'src/app/core/model/city.model';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss'],
})
export class CityFormComponent extends BaseForm implements OnInit, OnDestroy {
  formType!: string;
  countries!: Country[];
  subscription!: Subscription;
  city!: City;

  constructor(
    protected readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly countryService: CountriesService,
    private readonly cityService: CityService,
    private readonly route: ActivatedRoute
  ) {
    super(location);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      countryId: [null, Validators.required],
    });

    this.countryService.getCountries().subscribe((res) => {
      this.countries = res.data;
    });

    this.subscription = this.route.queryParams
      .pipe(
        map((params) => params.id),
        tap((id) => console.log(id)),
        mergeMap((id) => {
          if (id) {
            return this.cityService.getCity(id);
          }
          return of(null);
        })
      )
      .subscribe((res) => {
        console.log('response => ', res);
        if (res) {
          this.city = res;
          this.formType = 'Edit';
          this.form.patchValue({
            name: res.name,
            countryId: res.countryId,
          });
        } else {
          this.formType = 'Create';
        }
      });
  }

  handelSubmitted(): void {
    console.log(this.form.value);

    if (this.formType == 'Edit') {
      this.cityService.editCity(this.form.value).subscribe((res) => {
        console.log(res);
        this.cancel();
      });
      return;
    }
    this.cityService.addCity(this.form.value).subscribe((res) => {
      console.log(res);
      this.cancel();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
