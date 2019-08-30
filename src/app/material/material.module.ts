import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';



const material = [
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
