
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private apiUrl = 'https://api.chucknorris.io/jokes/'

  constructor(private http: HttpClient) { }

  getRandomJoke(){
    return this.http.get(this.apiUrl +'random');
  }

  getCategories(){
    return this.http.get(this.apiUrl + 'categories')
  }

  getRandomJokeByCategory(category: string){
    return this.http.get(this.apiUrl + `random?category=${category}`)
  }

  getJokesBySearch(searchTerm: string){
    return this.http.get(this.apiUrl + `search?query=${searchTerm}`)
  }
}
