import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var anychart: any;

@Component({
  selector: 'app-map3',
  templateUrl: './map3.component.html',
  styleUrl: './map3.component.scss',
})
export class Map3Component implements OnInit {
  regionData = [
    { id: 'AF', value: 0 },
    { id: 'AO', value: 1 },
    { id: 'AL', value: 2 },
    { id: 'AE', value: 3 },
    { id: 'AR', value: 4 },
    { id: 'AM', value: 5 },
    { id: 'TF', value: 6 },
    { id: 'AU', value: 7 },
    { id: 'AT', value: 8 },
    { id: 'AZ', value: 9 },
    { id: 'BI', value: 10 },
    { id: 'BE', value: 11 },
    { id: 'BJ', value: 12 },
    { id: 'BF', value: 13 },
    { id: 'BD', value: 14 },
    { id: 'BG', value: 15 },
    { id: 'BA', value: 16 },
    { id: 'BY', value: 17 },
    { id: 'BZ', value: 18 },
    { id: 'BO', value: 19 },
    { id: 'BR', value: 20 },
    { id: 'BN', value: 21 },
    { id: 'BT', value: 22 },
    { id: 'BW', value: 23 },
    { id: 'CF', value: 24 },
    { id: 'CA', value: 25 },
    { id: 'CH', value: 26 },
    { id: 'CL', value: 27 },
    { id: 'CN', value: 28 },
    { id: 'CI', value: 29 },
    { id: 'CM', value: 30 },
    { id: 'Cyprus_U.N._Buffer_Zone', value: 31 },
    { id: 'CD', value: 32 },
    { id: 'CG', value: 33 },
    { id: 'CO', value: 34 },
    { id: 'CR', value: 35 },
    { id: 'CU', value: 36 },
    { id: 'N._Cyprus', value: 37 },
    { id: 'CY', value: 38 },
    { id: 'CZ', value: 39 },
    { id: 'DE', value: 40 },
    { id: 'DJ', value: 41 },
    { id: 'DK', value: 42 },
    { id: 'DO', value: 43 },
    { id: 'DZ', value: 44 },
    { id: 'EC', value: 45 },
    { id: 'EG', value: 46 },
    { id: 'ER', value: 47 },
    { id: 'ES', value: 48 },
    { id: 'EE', value: 49 },
    { id: 'ET', value: 50 },
    { id: 'FI', value: 51 },
    { id: 'FJ', value: 52 },
    { id: 'FR', value: 53 },
    { id: 'GA', value: 54 },
    { id: 'GB', value: 55 },
    { id: 'GE', value: 56 },
    { id: 'GH', value: 57 },
    { id: 'GN', value: 58 },
    { id: 'GW', value: 59 },
    { id: 'GQ', value: 60 },
    { id: 'GR', value: 61 },
    { id: 'GL', value: 62 },
    { id: 'GT', value: 63 },
    { id: 'GY', value: 64 },
    { id: 'HN', value: 65 },
    { id: 'HR', value: 66 },
    { id: 'HT', value: 67 },
    { id: 'HU', value: 68 },
    { id: 'ID', value: 69 },
    { id: 'IN', value: 70 },
    { id: 'IE', value: 71 },
    { id: 'IR', value: 72 },
    { id: 'IQ', value: 73 },
    { id: 'IS', value: 74 },
    { id: 'IL', value: 75 },
    { id: 'IT', value: 76 },
    { id: 'JO', value: 77 },
    { id: 'JP', value: 78 },
    { id: 'KZ', value: 79 },
    { id: 'KE', value: 80 },
    { id: 'KG', value: 81 },
    { id: 'KH', value: 82 },
    { id: 'KR', value: 83 },
    { id: 'Kosovo', value: 84 },
    { id: 'KW', value: 85 },
    { id: 'LA', value: 86 },
    { id: 'LB', value: 87 },
    { id: 'LR', value: 88 },
    { id: 'LY', value: 89 },
    { id: 'LK', value: 90 },
    { id: 'LS', value: 91 },
    { id: 'LT', value: 92 },
    { id: 'LV', value: 93 },
    { id: 'MA', value: 94 },
    { id: 'MD', value: 95 },
    { id: 'MG', value: 96 },
    { id: 'MX', value: 97 },
    { id: 'MK', value: 98 },
    { id: 'ML', value: 99 },
    { id: 'MM', value: 100 },
    { id: 'ME', value: 101 },
    { id: 'MN', value: 102 },
    { id: 'MZ', value: 103 },
    { id: 'MR', value: 104 },
    { id: 'MW', value: 105 },
    { id: 'MY', value: 106 },
    { id: 'NA', value: 107 },
    { id: 'NC', value: 108 },
    { id: 'NE', value: 109 },
    { id: 'NG', value: 110 },
    { id: 'NI', value: 111 },
    { id: 'NL', value: 112 },
    { id: 'NO', value: 113 },
    { id: 'NP', value: 114 },
    { id: 'NZ', value: 115 },
    { id: 'OM', value: 116 },
    { id: 'PK', value: 117 },
    { id: 'PA', value: 118 },
    { id: 'PE', value: 119 },
    { id: 'PH', value: 120 },
    { id: 'PG', value: 121 },
    { id: 'PL', value: 122 },
    { id: 'PR', value: 123 },
    { id: 'KP', value: 124 },
    { id: 'PT', value: 125 },
    { id: 'PY', value: 126 },
    { id: 'PS', value: 127 },
    { id: 'QA', value: 128 },
    { id: 'RO', value: 129 },
    { id: 'RW', value: 130 },
    { id: 'EH', value: 131 },
    { id: 'SA', value: 132 },
    { id: 'SD', value: 133 },
    { id: 'SS', value: 134 },
    { id: 'SN', value: 135 },
    { id: 'SL', value: 136 },
    { id: 'SV', value: 137 },
    { id: 'Somaliland', value: 138 },
    { id: 'SO', value: 139 },
    { id: 'RS', value: 140 },
    { id: 'SR', value: 141 },
    { id: 'SK', value: 142 },
    { id: 'SI', value: 143 },
    { id: 'SE', value: 144 },
    { id: 'SZ', value: 145 },
    { id: 'SY', value: 146 },
    { id: 'TD', value: 147 },
    { id: 'TG', value: 148 },
    { id: 'TH', value: 149 },
    { id: 'TJ', value: 150 },
    { id: 'TM', value: 151 },
    { id: 'TL', value: 152 },
    { id: 'TN', value: 153 },
    { id: 'TR', value: 154 },
    { id: 'TW', value: 155 },
    { id: 'TZ', value: 156 },
    { id: 'UG', value: 157 },
    { id: 'UA', value: 158 },
    { id: 'UY', value: 159 },
    { id: 'US', value: 160 },
    { id: 'UZ', value: 161 },
    { id: 'VE', value: 162 },
    { id: 'VN', value: 163 },
    { id: 'YE', value: 164 },
    { id: 'ZA', value: 165 },
    { id: 'ZM', value: 166 },
    { id: 'ZW', value: 167 },
    { id: 'RU', value: 168 },
  ];

  map: any;

  series: any;

  marker: { name: string; lat: number; long: number; fullName: string }[] = [
    {
      name: 'Riyadh',
      lat:  24.774265,
      long: 46.738586,
      fullName: 'Riyadh',
    },
  ];

  seriesMarker: any;

  mapBackground: any;

  constructor(@Inject(DOCUMENT) private mapDocument: Document) {}

  ngOnInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    this.mapDocument.getElementById('container')!.textContent = '';

    this.regionData = this.regionData.map((data: any) => {
      return {
        ...data,
        fill: '#2C314C',
      };
    });

    this.regionData = anychart.data.set(this.regionData);
    this.map = anychart.map();

    this.map.overlapMode('allow-overlap');

    this.series = this.map.choropleth(this.regionData);
    this.series.geoIdField('id');

    this.series.normal().stroke('#5B5F74');
    this.series.normal().fill(function (this: any) {
      return this.sourceColor;
    });

    this.series.hovered().stroke('#5B5F74');
    this.series.hovered().fill(function (this: any) {
      return this.sourceColor;
    });

    this.series.selected().stroke('#5B5F74');
    this.series.selected().fill(function (this: any) {
      return this.sourceColor;
    });

    this.seriesMarker = this.map.marker(this.marker);

    this.seriesMarker.overlapMode('allow-overlap');

    this.seriesMarker.normal().fill({
      src: 'assets/marker.png',
      mode: 'fit',
    });

    this.seriesMarker.size(20);
    this.seriesMarker.stroke(0);
    this.seriesMarker.type('square');

    this.seriesMarker.labels().enabled(false);

    this.seriesMarker.hovered().fill({
      src: 'assets/marker.png',
      mode: 'fit',
    });
    this.seriesMarker.hovered().size(20);
    this.seriesMarker.hovered().stroke(0);
    this.seriesMarker.hovered().type('square');

    var tooltip = this.series.tooltip();
    tooltip.enabled(false);
    this.mapBackground = this.map.background();

    this.mapBackground.fill('#13172F');

    if (!this.map.container()) {
      this.map.container('container');
      this.map.geoData(anychart.maps['world']);

      anychart.graphics.updateReferences();
      this.map.draw();
    }
  }
}
