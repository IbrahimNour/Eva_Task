import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { City } from 'src/app/core/model/city.model';
import { CityService } from 'src/app/core/services/cities/city.service';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
})
export class CitiesListComponent implements OnInit {
  cities!: City[];
  displayedColumns: string[] = ['Id', 'Name', 'Country', 'actions'];
  constructor(
    private readonly citySeervice: CityService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.citySeervice.getcities().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.cities = [
          {
            id: 1,
            name: 'Alexandria',
            countryId: 1,
            country: { id: 1, name: 'Egypt' },
          },
        ];
      }
    );
  }

  handelDelete(element: City): void {
    console.log(element);
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.citySeervice.deleteCity(element.id).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
}
