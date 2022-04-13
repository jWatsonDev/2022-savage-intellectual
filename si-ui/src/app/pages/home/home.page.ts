import { Component, OnInit } from '@angular/core';
import { CATEGORY_LIST } from 'src/app/helpers/config/category';
import { Discipline } from 'src/app/models/discipline';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  disciplines: Array<Discipline>;
  statuses: Array<Status>;
  statusDisciplines: Array<Status>;

  ngOnInit() {
    this.getDisciplinesAndStatuses();
  }

  getDisciplinesAndStatuses() {
    this.buildStatusDisciplines();
    // TODO: 
    // const today = new Date().toISOString().slice(0, 10);
    // forkJoin(
    //   this._dataService.getDisciplinesByUsername(),
    //   this._dataService.getStatusesByUsernameAndDate(today)
    // ).subscribe(res => {
    //   this.disciplines = res[0];
    //   this.statuses = res[1];
    //   // console.log(res);
    //   this.buildStatusDisciplines();
    // });
  }

  buildStatusDisciplines() {
    this.statusDisciplines = [
      {
        disciplineId: 1,
        name: 'Read Bible',
        complete: true,
        category: 'personal'
      },
      {
        disciplineId: 2,
        name: '15m Professional Dev',
        complete: true,
        category: 'professional'
      },
      {
        disciplineId: 3,
        name: '~Gallon of Water',
        complete: true,
        category: 'physical'
      },
      {
        disciplineId: 4,
        name: 'Workout',
        complete: false,
        category: 'physical'
      }
    ];
    // TODO:
    // this.disciplines.forEach(discipline => {
    //   let status: Status;
    //   status = this.statuses.find(s => s.disciplineId === discipline.id);
    //   // console.log('status', status, discipline.id)
    //   if (status) {
    //     status.name = discipline.name;
    //     status.category = discipline.category;
    //   } else {
    //     status = {
    //       name: discipline.name,
    //       disciplineId: discipline.id,
    //       complete: false,
    //       date: new Date(),
    //       username: discipline.username,
    //       category: discipline.category
    //     };
    //   }
    //   this.statusDisciplines.push(status);
    // });

    // console.log(this.statusDisciplines)
  }

  // TODO: update discipline status
  valueChanged(discipline) {
    // console.log(discipline);
    // this._dataService.saveStatus(discipline).subscribe(res => {
    //   console.log(res);
    // });
  }

}
