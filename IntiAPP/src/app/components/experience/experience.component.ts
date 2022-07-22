import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  educationList: any;

  constructor(private datosPortFolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortFolio.obtenerDatos().subscribe(data=>{
      this.educationList= data.education;
    })
  }

}
