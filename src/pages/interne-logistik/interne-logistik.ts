
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'


/**
 * Generated class for the InterneLogistikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interne-logistik',
  templateUrl: 'interne-logistik.html',
})
export class InterneLogistikPage {
	
	barChart: any
	@ViewChild('barCanvas') barCanvas;

  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams,
	) {}
	
	

	ionViewDidLoad() {
		this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["AbteilungA", "AbteilungB", "AbteilungC"],
                datasets: [{
                    label: '# Waren',
                    data: [4, 12, 7],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
	}
}