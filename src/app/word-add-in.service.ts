import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordAddInService {
  constructor() {}

  async addQrCodeToCurrentDocument(data: string) {
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const inlinePicture = context.document.body.insertInlinePictureFromBase64(
        data,
        Word.InsertLocation.end
      );

      await context.sync();
    });
  }
}
