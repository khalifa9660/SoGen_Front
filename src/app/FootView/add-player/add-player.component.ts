import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuth } from 'src/app/Models/jwtAuth';
import { CreatePlayerModel } from 'src/app/Models/player';
import { CreatePlayerService } from 'src/app/services/FootballData/createPlayer.services';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  sideNavStatus: boolean = false;
  errorMessage: string='';
  
  constructor(private http: HttpClient, private router: Router, private FormBuilder: FormBuilder, private createPlayer: CreatePlayerService ){}
 
  player= new CreatePlayerModel();
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  addPlayerForm!:FormGroup

  ngOnInit(): void {
    this.addPlayerForm = this.FormBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      photo: ['', Validators.required],
      age: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  savePlayer() {
    // Mettez ici votre logique pour enregistrer le joueur
    console.log('Player saved:', this.addPlayerForm.value);
  
    if (this.addPlayerForm.valid) {
      const player = this.addPlayerForm.value; // Récupérer les données du formulaire
      this.createPlayer.AddPlayer(player).subscribe({
        next: (value: CreatePlayerModel) => {
          console.log('Player added successfully', value);
          this.router.navigate(['/dream team']);
        },
        error: (error: any) => {
          console.error('Error while adding player:', error);
          this.errorMessage = 'Failed to save player. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Invalid form data. Please check the fields.';
    }
  }
  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    // Afficher l'image sélectionnée dans l'aperçu
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }



}
