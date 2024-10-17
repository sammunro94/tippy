import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Componen
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { RowActionsCellRendererComponent } from './renderer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ang18';

  // Row Data: The data to be displayed.
  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    this.getActionsColumn(),
  ];

  private getActionsColumn(): ColDef {
    return {
      field: 'actions',
      headerName: '',
      maxWidth: 68,
      cellRenderer: RowActionsCellRendererComponent,
      cellRendererParams: this.getActionMenuItems(),
    };
  }
  private getActionMenuItems() {
    return {
      menuItems: [
        {
          icon: 'visibility',
          text: 'test',
          callback: (params: any) => {},
        },
        {
          icon: 'delete',
          text: 'test',
          callback: (params: any) => {},
        },
      ],
    };
  }
}
