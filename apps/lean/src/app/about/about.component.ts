import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lean-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  userStories = [
    'Als gebuiker wil ik een workout kunnen starten, zodat ik mijn uitgevoerde oefeningen bij kan houden.',
    'Als gebruiker wil ik sets kunnen toevoegen aan een workout, zodat ik mijn uitgevoerde sets bij kan houden.',
    'Als gebruiker wil ik een zelf aangemaakte oefening toe kunnen voegen aan een workout, zodat ik mijn eigen oefeningen kan gebruiken.',
    'Als gebruiker wil ik een workout kunnen aanpassen, zodat ik eventuele fouten kan corrigeren.',
    'Als gebruiker wil ik een workout kunnen verwijderen, zodat ik ongewenste workouts kan verwijderen.',
    'Als gebruiker wil ik een workout kunnen bekijken, zodat ik mijn uitgevoerde oefeningen kan bekijken.',
  ]

  constructor() {}

  ngOnInit(): void {}
}
