import { ConfirmDeleteComponent } from '../../../shared/components/confirm-delete/confirm-delete.component';
import { CountryFormComponent } from './../country-form/country-form.component';
import { ApiService } from './../../../core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { Country } from 'src/app/core/model/countries.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries!: Country[];
  displayedColumns: string[] = ['Id', 'Name', 'actions'];

  constructor(
    private readonly countryService: CountriesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (response) => {
        console.log(response);
        this.countries = response.data;
      },
      (error) => {
        console.log(error);
        this.countries = [
          {
            id: 1,
            name: 'Egypt',
          },
          { id: 2, name: 'Italy' },
        ];
      }
    );
  }

  handelDelete(element: Country): void {
    console.log(element);
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.countryService.deleteCountry(element.id).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
}
