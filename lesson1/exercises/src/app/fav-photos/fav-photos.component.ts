import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cvws.icloud-content.com/B/AdCOL6bS5wUBMoyQgm-G6dE3kJ7sATjQNLG61-XNuik4SFhRku93ie5e/_DC31342.jpg?o=Akj4f8YoFmOEYNPinZlkYauuqg6JKvZJnxhZsHW9AOV7&v=1&x=3&a=CAogKgTj_almvaVoObBb4JHdIjCt5Q39Kf00dmeNHDFV2UUSbxCX16LKpjAYl7T-y6YwIgEAUgQ3kJ7sWgR3ie5eaifAnk9sy-wcreUm3IjeWhBOwNPucIjG48tZf1mt4TUcn25qdHTRxhNyJ6-6tkwbIf9wHSP7B2u_M0vVdHCdaJEZ_O_yJeCOeWFWhWa3AiWc2w&e=1659627346&fl=&r=26a212e0-27dc-45b0-8c31-33eea72dab62-1&k=w6wEQj4B6SjluNNkQQjfEQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=52&s=Xe-cLYQ1z-WpNpTg57SAMN4OJPk&cd=i';
  image3 = 'https://cvws.icloud-content.com/B/ARAKCghRVLBdxWtjyGnbifBtda0iAZXSOo6suQOT8nq0n6QiIFHqfpHZ/_DC31343.jpg?o=AmQIHX64l9fv2R2mdCKucDVHyRMWyOz415DJD1W7di5b&v=1&x=3&a=CAog8licqI4EA96Jp_3lvdoNWKumnqXzSdqVYd85W5Ka6QQSbxCe16LKpjAYnrT-y6YwIgEAUgRtda0iWgTqfpHZaie7-UDM7nKlLVhq8l4QUKEFptfAlT3Y4xQ8TfGpp_h_UKrVr5MsSSpyJ8W5UKhMs6FzzHdxZCJkJu8518cOg2N70YMM147a1budiXHRq-HneQ&e=1659627346&fl=&r=26a212e0-27dc-45b0-8c31-33eea72dab62-1&k=cKd-2zvSZDC05x1QxuNEag&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=52&s=iMTdDgyWfZRva7RYD6WFOXVAuQI&cd=i';

  constructor() { }

  ngOnInit() {
  }

}