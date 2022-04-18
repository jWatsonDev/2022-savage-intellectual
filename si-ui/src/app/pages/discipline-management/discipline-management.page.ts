import { Component, OnInit } from '@angular/core';
import { Discipline } from 'src/app/models/discipline';
import { ModalController, AlertController } from '@ionic/angular';
import { DisciplineFormComponent } from './discipline-form/discipline-form.component';

@Component({
  selector: 'app-discipline-management',
  templateUrl: './discipline-management.page.html',
  styleUrls: ['./discipline-management.page.scss'],
})
export class DisciplineManagementPage implements OnInit {

  disciplines: Array<Discipline>;

  constructor(
    private _modalController: ModalController,
    private _alertController: AlertController) { }

  ngOnInit() {

    //this._dataService.getDisciplinesByUsername().subscribe(d => this.disciplines = d);
    this.disciplines = [
      {
        id: 1,
        name: 'Read Bible',
        category: 'personal'
      },
      {
        id: 2,
        name: '15m Professional Dev',
        category: 'professional'
      },
      {
        id: 3,
        name: '~Gallon of Water',
        category: 'physical'
      },
      {
        id: 4,
        name: 'Workout',
        category: 'physical'
      }
    ];
  }

  async edit(discipline) {
    // TODO:
    // Show modal
    const modal = await this._modalController.create({
      component: DisciplineFormComponent,
      componentProps: {
        'discipline': discipline,
      },
      cssClass: 'custom-modal'
    });
    modal.present();

    // Get returned data
    const { data } = await modal.onWillDismiss();
    // console.log('a parent knows his child', data)
    // only set userRating if data emission from child is valid
    //if (data) this.var = data;
  }

  async create() {
    // TODO:
    // Show modal
    const modal = await this._modalController.create({
      component: DisciplineFormComponent,
      componentProps: {
        'discipline': null,
      },
      cssClass: 'custom-modal'
    });
    modal.present();

    // Get returned data
    const { data } = await modal.onWillDismiss();
    // console.log('a parent knows his child', data)
    // only set userRating if data emission from child is valid
    //if (data) this.var = data;
  }


  async delete(discipline: Discipline): Promise<any> {
    const alert = await this._alertController.create({
      header: 'Delete Discipline',
      message:
        'Are you sure you want to delete this Discipline? ',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            console.log('delete', discipline);

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          // cssClass: 'secondary',
          handler: () => {
            // console.log('Cancelled delete.');
          }
        }
      ]
    });
    await alert.present();
  }
}