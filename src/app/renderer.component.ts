import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import tippy from 'tippy.js';

interface MenuItem {
  icon: string;
  text: string;
  callback: () => void;
}

@Component({
  selector: 'sw-grid-row-actions-cell-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowActionsCellRendererComponent implements AfterViewInit {
  isOpen = false;
  private tippyInstance = tippy(document.createElement('div'));
  menuItems: MenuItem[] = [];

  @ViewChild('content') container?: ElementRef<HTMLDivElement>;
  @ViewChild('trigger') button?: ElementRef;

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.button?.nativeElement as HTMLDivElement);
    this.tippyInstance.setProps({
      trigger: 'manual',
      placement: 'bottom-end',
      offset: [0, -50],
      interactive: true,
      appendTo: document.body,
    });
  }

  agInit(params: { menuItems: MenuItem[] }): void {
    this.menuItems = params.menuItems;
  }

  togglePopup(): void {
    this.isOpen = !this.isOpen;

    if (this.isOpen && this.container) {
      this.tippyInstance.show();
      this.tippyInstance.setContent(this.container.nativeElement);
    } else {
      this.tippyInstance.unmount();
    }
  }

  refresh(): boolean {
    return false;
  }
}
