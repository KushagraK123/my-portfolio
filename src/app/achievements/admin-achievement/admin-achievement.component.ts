import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Achievement } from '../achievement.model';
import { AchievementService } from '../achievement.service';

@Component({
  selector: 'app-admin-achievement',
  templateUrl: './admin-achievement.component.html',
  styleUrls: ['./admin-achievement.component.scss']
})
export class AdminAchievementComponent implements OnInit, OnDestroy {
  
  achievements: Achievement[]=[];
  private achievementsSubs: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private achievementService: AchievementService) {
   }

  ngOnInit(): void {
    this.achievementService.getAchievements();
    this.achievementsSubs = this.achievementService.getAchievementUpdateListener().subscribe(
      (achievements: Achievement[])=>{
        this.achievements = achievements;
      }
    );
  }


  updateAchievement(form: NgForm, achievement: Achievement) {
    if(form.invalid ) return;
    let title = form.controls['title'].value;
    let time = form.controls['time'].value;
    let description = form.controls['description'].value;
    let isActive = form.controls['isActive'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let a: Achievement = {_id: achievement._id, title: title, description: description, 
    time: time, sequence: seq, isActive: isActive};
    this.achievementService.updateAchievement(a);
    this._snackBar.open("Saved item successfully", "Hide");
  }
  addNewAchievement(form: NgForm) {
    if(form.invalid) return;
    let title = form.controls['title'].value;
    let time = form.controls['time'].value;
    let description = form.controls['description'].value;
    let isActive = form.controls['isActive'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let a: Achievement = {_id: "", title: title, description: description, 
      time: time, sequence: seq, isActive: isActive};
    this.achievementService.addAchievement(a);
    form.resetForm();

  }

  deleteAchievement(id: String): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.achievementService.deleteAchievement(id);
    });
  }

  ngOnDestroy(): void {
   this.achievementsSubs.unsubscribe();
  }

}
