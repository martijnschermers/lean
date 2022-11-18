import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lean-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  userStories = [
    'Als gebruiker wil ik een workout kunnen starten, zodat ik mijn uitgevoerde oefeningen bij kan houden.',
    'Als gebruiker wil ik sets kunnen toevoegen aan een workout, zodat ik mijn uitgevoerde sets bij kan houden.',
    'Als gebruiker wil ik sets kunnen verwijderen uit een workout, zodat ik sets kan verwijderen die ik niet heb uitgevoerd.',
    'Als gebruiker wil ik een zelf aangemaakte oefening toe kunnen voegen aan een workout, zodat ik mijn eigen oefeningen kan gebruiken.',
    'Als gebruiker wil ik een workout kunnen aanpassen, zodat ik eventuele fouten kan corrigeren.',
    'Als gebruiker wil ik een workout kunnen verwijderen, zodat ik ongewenste workouts kan verwijderen.',
    'Als gebruiker wil ik een workout kunnen bekijken, zodat ik mijn uitgevoerde oefeningen kan bekijken.',
    'Als gebruiker wil ik een andere gebruiker kunnen volgen, zodat ik zijn workouts kan bekijken.',
    'Als gebruiker wil ik deel kunnen nemen aan een group workout, zodat ik samen met anderen kan trainen.',
    'Als gebruiker wil ik een custom oefening toe kunnen voegen, zodat ik niet afhankelijk ben van de oefeningen die al bestaan.',
    'Als gebruiker wil ik een custom oefening kunnen aanpassen, zodat ik eventuele fouten kan corrigeren.',
    'Als gebruiker wil ik een custom oefening kunnen verwijderen, zodat ik ongewenste oefeningen kan verwijderen.',
  ]

  constructor() {}

  ngOnInit(): void {}
}
