import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Board } from '../board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() board: Board;
  constructor(private boardService: BoardService) { }

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTasks(this.board.id, this.board.tasks);
  }

}
