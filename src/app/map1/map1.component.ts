import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var anychart: any;

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrl: './map1.component.scss',
})
export class Map1Component implements OnInit {
  regionData: any;

  map: any;

  series: any;

  dataSet: {points: any[]}[] = [
    {
      points: [26.32444, 50.11512, 25.00341, 46.70995],
    },
  ];

  startMarker: {name: string; lat: number; long: number; fullName: string}[] = [
    {
      name: 'Dhahran',
      lat: 26.32444,
      long: 50.11512,
      fullName: 'Dhahran',
    },
  ];

  startSeriesMarker: any;

  endMarker: {name: string; lat: number; long: number; fullName: string}[]  = [
    {
      name: 'Riyadh',
      lat: 25.00341,
      long: 46.70995,
      fullName: 'Riyadh',
    },
  ];

  endSeriesMarker: any;

  mapBackground: any;

  constructor(@Inject(DOCUMENT) private mapDocument: Document) {}

  ngOnInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    this.mapDocument.getElementById('container')!.textContent = '';
    this.regionData = anychart.data.set([
      {
        id: 'SA.4293',
        name: 'saudi',
        value: 8,
        'middle-x': 20,
        'middle-y': 20,
      },
      { id: 'SA.NJ', value: 13, fill: '#141A38' },
      { id: 'SA.RI', name: 'Riyadh', value: 13, fill: '#121732' },
      { id: 'SA.SH', name: 'Eastern\n Province', value: 5, fill: '#141A38' },
      { id: 'SA.MD', value: 5, fill: '#141A38' },
      { id: 'SA.QS', name: 'Qasim', value: 5, fill: '#10152D' },
      {
        id: 'SA.HA',
        value: 13,
        'middle-x': 0.4,
        'middle-y': 0.4,
        fill: '#121732',
      },
      {
        id: 'SA.TB',
        name: 'Tabuk',
        value: 8,
        'middle-x': 0.3,
        'middle-y': 0.2,
        fill: '#10152D',
      },
      {
        id: 'SA.HS',
        name: 'North \n Province',
        value: 8,
        'middle-x': 0.7,
        'middle-y': 0.6,
        fill: '#10152D',
      },
      { id: 'SA.JF', value: 5, fill: '#141A38' },
      {
        id: 'SA.BA',
        value: 5,
        'middle-x': 0.5,
        'middle-y': 0.3,
        fill: '#141A38',
        label: { rotation: 290 },
      },
      { id: 'SA.AS', value: 13, fill: '#121732' },
      {
        id: 'SA.JZ',
        name: 'Jazan',
        value: 8,
        'middle-x': 0.7,
        'middle-y': 0.3,
        fill: '#10152D',
        label: { rotation: 60 },
      },
      {
        id: 'SA.MK',
        name: 'Makkah',
        value: 5,
        'middle-x': 0.5,
        'middle-y': 0.3,
        fill: '#10152D',
      },
    ]);
    this.map = anychart.map();

    this.map.unboundRegions().fill('#121268').stroke('rgb(203,214,236)',2);

    this.series = this.map.connector(this.dataSet);

    this.series.normal().markers().size(0);
    this.series.curvature(0);
    this.series.stroke(['#08296F', '#0F4FD5'], 8);

    this.series = this.map.choropleth(this.regionData);
    this.series.geoIdField('id');

    this.series.hovered().stroke('#235980');
    this.series.hovered().fill('transparent');

    var labels = this.series.labels();
    labels.fontColor('#AAAAAA');
    labels.fontSize('7.25px');
    labels.offsetY('10');
    this.series.labels(true);

    this.startSeriesMarker = this.map.marker(this.startMarker);

    this.startSeriesMarker.normal().fill({
      src: 'assets/marker.png',
      mode: 'fit',
    });

    this.startSeriesMarker.size(8);
    this.startSeriesMarker.stroke(0);
    this.startSeriesMarker.type('square');

    this.startSeriesMarker
      .labels()
      .useHtml(true)
      .format(function (this: any) {
        const labelText = this.getData('name');
        return `<span>${labelText}</span>`;
      })
      .fontSize(12)
      .fontColor('#fff')
      .background({
        enabled: true,
        fill: '#2C314C',
        stroke: {
          keys: [
            { offset: 0, color: '#41BFF3' },
            { offset: 1, color: '#D0EFFC' },
          ],
          angle: 180,
          opacity: 1,
        },
        cornerType: 'round',
        corners: 2,
      })
      .padding(7, 7)
      .offsetY(10);

    this.startSeriesMarker.hovered().fill({
      src: 'assets/marker.png',
      mode: 'fit',
    });
    this.startSeriesMarker.hovered().size(8);
    this.startSeriesMarker.hovered().stroke(0);
    this.startSeriesMarker.hovered().type('square');

    this.endSeriesMarker = this.map.marker(this.endMarker);

    this.endSeriesMarker.normal().fill({
      src: 'assets/marker.png',
      mode: 'fit',
    });
    this.endSeriesMarker.size(9);
    this.endSeriesMarker.stroke(0);
    this.endSeriesMarker.type('square');

    // Labels on markers
    this.endSeriesMarker
      .labels()
      .useHtml(true)
      .format(function (this: any) {
        const labelText = this.getData('name');
        return `<span>${labelText}</span>`;
      })
      .fontSize(12)
      .fontColor('#fff')
      .background({
        enabled: true,
        fill: '#2C314C',
        stroke: {
          keys: [
            { offset: 0, color: '#41BFF3' },
            { offset: 1, color: '#D0EFFC' },
          ],
          angle: 180,
          opacity: 1,
        },
        cornerType: 'round',
        corners: 2,
      })
      .padding(7, 7)
      .offsetY(10);

    this.endSeriesMarker.hovered().fill({
      src: 'assets/marker.png',
      mode: 'fit',
    });
    this.endSeriesMarker.hovered().size(8);
    this.endSeriesMarker.hovered().stroke(0);
    this.endSeriesMarker.hovered().type('square');

    var tooltip = this.series.tooltip();
    tooltip.enabled(false);
    this.mapBackground = this.map.background();

    this.mapBackground.fill('#13172F');

    if (!this.map.container()) {
      this.map.container('container');

      this.map.geoData(anychart.maps['saudi_arabia']);
      this.map.draw();
    }
  }
}
