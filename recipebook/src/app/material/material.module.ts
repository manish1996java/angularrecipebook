import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatCardImage, MatButtonToggle, MatButtonToggleModule, MatIconModule, MatList, MatListItem, MatListModule, MatMenuModule, MatInput, MatInputModule, MatFormFieldModule, MatExpansionModule, MatSelectModule ,MatProgressBarModule, MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material';

const materialComponent = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonToggleModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatSelectModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
