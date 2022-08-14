import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jokes: any[]=[]
  categories: any[]= []
  constructor(private jokeService: JokesService){
}
  
  ngOnInit(): void {
    this.jokeService.getRandomJoke().subscribe((joke:any)=>{
      this.jokes.push(joke)
      console.log(this.jokes)

      this.jokeService.getCategories().subscribe((category:any)=>{
        this.categories = category
      })
    })
    
  }

  findJokeByCategory(category: string){
    this.jokeService.getRandomJokeByCategory(category).subscribe((jokeByCategory: any)=>{
      this.jokes = []
      this.jokes.push(jokeByCategory)
    })
  }

  searchJoke(searchTerm: string){
    if (searchTerm !== '') {
      this.jokeService.getJokesBySearch(searchTerm).subscribe((joke: any)=>{
        this.jokes = joke.result

          if (this.jokes.length === 0) {
            alert("Not a single joke was found")
          }
      })
    }
    else{
      alert("You didn't type anything!")
      
      
    }
    
    
  }

  
}
