import { Component, OnInit, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SubjectcompoComponent } from '../components/subjectcompo/subjectcompo.component';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.scss']
})
export class KeeperComponent implements OnInit {

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  addSubject() {
    let childComponent = this.resolver.resolveComponentFactory(SubjectcompoComponent);
    this.componentRef = this.target.createComponent(childComponent);
    
  }

 
}
