import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Discipline } from 'src/app/models/discipline';
import { CATEGORY_LIST } from 'src/app/helpers/config/category';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-discipline-form',
  templateUrl: './discipline-form.component.html',
  styleUrls: ['./discipline-form.component.scss'],
})
export class DisciplineFormComponent implements OnInit {

  @Input() discipline: Discipline;
  categories = CATEGORY_LIST;

  disciplineForm = new FormGroup({
    name: new FormControl([], Validators.required),
    description: new FormControl(''),
    category: new FormControl([], [Validators.required])
  });

  constructor(
    private _modalController: ModalController,
    private _dataService: DataService
  ) { }

  ngOnInit() {
    if (this.discipline) {
      console.log('discipline form', this.discipline);
      this.disciplineForm.patchValue(this.discipline);
    }
  }

  onSubmit() {
    if (this.discipline) {
      // Update 
      Object.keys(this.disciplineForm.controls).forEach(key => {
        this.discipline[key] = this.disciplineForm.get(key).value;
      });
    } else {
      // Create
      this.discipline = this.disciplineForm.value;
    }
    console.log('discipline', this.discipline)

    // save discipline 
    // TODO: 
    this._dataService.createDiscipline(this.discipline).subscribe(res => {
      console.log(res);
      // TODO: potentially add toast notification
      this._modalController.dismiss();
    }, error => {
      // TODO: let user know there was an issue saving discipline 
      console.error('error', error); 
    });
  }

  cancel() {
    this._modalController.dismiss();
  }
}