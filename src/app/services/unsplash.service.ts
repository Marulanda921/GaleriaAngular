import { Injectable } from '@angular/core';
import axios from 'axios';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private accesKey = "CxcID8qGMK1HIQC87J5q1Dvt_OkuvTm4hOXy7k2Rjvo"

  constructor() { }


  async getRandomImages(query: string = '', count: number = 10): Promise<Image[]>{
    const url = `https://api.unsplash.com/photos/random?client_id=${this.accesKey}&query=${query}&count=${count}`;

    try{
      const response = await axios.get(url);
      return response.data;
    }catch(error){
      console.error("No se establecio conexion", error);
      return [];
    }
  }

}
