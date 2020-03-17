import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@ViewChild('mainTab', { read: ElementRef , static: true}) el: ElementRef;

  constructor() { }

  ngOnInit() {
    const tabsLink = document.querySelectorAll('.tablinks');
    const tabsContent = document.querySelectorAll('.tabcontent');

    const entries = function*(iterable) {

      let i = 0;

      for (let item of iterable) {
        yield [i++, item];
      }

    }

    const showBlock = index => {

      for (const [blockIndex, block] of entries(tabsContent)) {

        block.style.display = blockIndex === index ? 'block' : 'none';

      }

    }

    showBlock(0);

    for (const [tabIndex, tab] of entries(tabsLink)) {

      tab.addEventListener('click', ev => {

        ev.preventDefault(); 
        showBlock(tabIndex);

      });

    }

  }

}
