import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    exports: [
      MatIconModule,
      MatButtonModule,
      MatToolbarModule,
      MatTableModule,
      MatInputModule
    ]
  })
  export class MaterialModule {}