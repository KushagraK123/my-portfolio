import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DeleteConfirmationDialogComponent } from '../../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Skill } from '../skill.model'
import { SkillService } from '../skills.service';
@Component({
  selector: 'app-skills-admin',
  templateUrl: './skills-admin.component.html',
  styleUrls: ['./skills-admin.component.scss']
})
export class SkillsAdminComponent implements OnInit, OnDestroy {
  skills: Skill[]=[];
  private skillsSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, public skillService: SkillService) {
   }

  ngOnInit(): void {
    this.skillService.getSkills();
    this.skillsSubscription = this.skillService.getSkillsUpdateListener().subscribe(
      (skills: Skill[])=>{
        console.log("Skills updated new size" + skills);
        this.skills = skills;
      }
    );
  }


  updateSkill(form: NgForm, skill: Skill) {
    if(form.invalid ) return;
    skill.name = form.controls['name'].value;
    skill.sequence =  Number.parseInt(form.controls['sequence'].value);
    skill.isActive =  form.controls['isActive'].value;

    this.skillService.updateSkill(skill);
    this._snackBar.open("Saved item successfully", "Hide");
  }
  addNewSkill(form: NgForm) {
    if(form.invalid) return;
    let name = form.controls['name'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    let id=name+seq;
    let isActive = form.controls['isActive'].value;
    let s: Skill = {_id: id, name: name, sequence: seq, isActive: isActive};
    this.skillService.addSkill(s);
    form.resetForm();

  }

  getIsActive(isActive: boolean){
    if(isActive)return "true";
    else return "false";
  }

  deleteSkill(id: String): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.skillService.deleteSkill(id);
    });
  }

  ngOnDestroy(): void {
   this.skillsSubscription.unsubscribe();
  }

}
