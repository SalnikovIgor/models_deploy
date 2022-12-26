import { Component, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FileHandle } from '../../derictives/dnd/dnd.directive';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent {
  @Output() image: EventEmitter<File> = new EventEmitter();

  imageSrc: SafeUrl = '';
  files: FileHandle[] = [];

  constructor (private sanitizer: DomSanitizer) {}

  onFileChanged(event: Event) {
    const input = (event.target as HTMLInputElement);
    if (input.files?.length) {
      const image = input.files[0];
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(image));
      this.image.emit(image);
    }
  }

  filesDropped(files: FileHandle[]): void {
    const image = files[0];
    this.imageSrc = image.url;
    this.image.emit(image.file);
  }
}
