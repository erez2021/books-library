import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {
@Input() books:any

bookToEdit: any;
booksForDisplay: any;
isEditModalOpen: boolean = false
display = "none";

  constructor() { }

  ngOnInit(): void {
    this.booksForDisplay = this.books.map((book: { title: string; publishedDate:string,authors:any  }) =>{return {title:book.title, date:book.publishedDate, author: book.authors}} )
    console.log(this.booksForDisplay);
    }
    openEditModal(book: object) {
      this.isEditModalOpen = true
      this.display = "block";
this.bookToEdit = book
    }
 closeEditModal() {
  this.isEditModalOpen = false
   this.display = "none"
 }
 saveBookDetails(event: object) {
console.log(event);
this.bookToEdit = event

 }
 deleteBook(book: any) {
const bookToDelete = this.booksForDisplay.findIndex((item :{title: string} )=> item.title === book.title)
 this.booksForDisplay.splice(bookToDelete, 1)
  }
}

