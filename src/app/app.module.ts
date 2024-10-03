import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component'; // Asegúrate de que la ruta sea correcta
import { ProductService } from './product.service'; // Importa el servicio

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent // Asegúrate de que este componente esté aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot() // Añade IonicModule aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
