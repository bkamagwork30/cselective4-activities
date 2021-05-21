import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  list: any = [
    "Notification",
  ]

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  _dismiss(item: string) {
    console.log(item)
  }

  close(){
    this.popoverController.dismiss();
  }
}
