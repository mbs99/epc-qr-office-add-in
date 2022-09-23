import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { EpcDto } from './dto/epc.dto';
import { WordAddInService } from './word-add-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'epc';

  epcData?: EpcDto;

  constructor(private wordAddInservice: WordAddInService) {}

  onEpcDataEvent(epcDto: EpcDto) {
    this.epcData = epcDto;
  }

  onQrCodeEvent(raw: any) {
    this.wordAddInservice.addQrCodeToCurrentDocument(raw);
  }
}
