import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

// export class Book {
//   public title!: string;
//   public date!: string;
// public author!: string;
// }

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // model = new Book();
@Output() closeModal: EventEmitter<any> = new EventEmitter();
@Output() saveBookDetails: EventEmitter<any> = new EventEmitter();
@Input() display: any
@Input() bookToEdit: any
  constructor() { }

  ngOnInit(): void {
  }
  closeEditModal() {
    this.closeModal.emit()
  }
  onSubmit(form: any) {
    console.log(form.value);
    this.saveBookDetails.emit(form.value)
  }
}
