import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.page.html',
  styleUrls: ['./financial.page.scss'],
})
export class FinancialPage implements OnInit {

  financialData: any[] = [];

  datosUnidad: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchFinancialData();
    //this.obtenerDatosUnidad();
  }


  fetchFinancialData() {
    // Realiza una solicitud HTTP GET a la URL especificada, en este caso a la API 'https://mindicador.cl/api'

    this.http.get('https://mindicador.cl/api').subscribe((response: any) => {
      // Cuando la solicitud se completa con éxito, se ejecuta esta función de devolución de llamada (callback)
      
      // Imprime la respuesta completa de la API en la consola del navegador para depuración
      console.log(response);
  
      // Transforma la respuesta de la API utilizando el método transformData
      // y asigna el resultado a la propiedad financialData del componente
      this.financialData = this.transformData(response); 
    });

  }

  // Definición de la función transformData que acepta un parámetro data de tipo any y devuelve un array de tipo any[]
  transformData(data: any): any[] {
    // Crear un array vacío llamado result donde se almacenarán los datos transformados
    const result = [];

    // Iterar a través de todas las propiedades de data usando un bucle for..in
    for (const key in data) { 

      // Verificar si la propiedad actual es propia del objeto (no heredada)
      if (data.hasOwnProperty(key) && typeof data[key] === 'object') 
      {
          // Si la propiedad es propia y su valor es de tipo objeto, agregarlo al array result 
          result.push(data[key]); 
      }
    } 

    // Devolver el array result que contiene todos los valores de tipo objeto encontrados en data
    return result;
  }

  //en caso solo sea una unidad financiera
  obtenerDatosUnidad() {
    const apiUrl = 'https://mindicador.cl/api/dolar';
    this.http.get<any>(apiUrl).subscribe(
      data => {
        this.datosUnidad = data;
      },
      error => {
        console.error('Error al obtener datos del dólar:', error);
      }
    );
  }
 

}
