export class Task {

  public constructor(public id : number, public text : string, public created : Date){

    this.id = this.id ? this.id : 0;
    this.text = this.text ? this.text : '';
    this.created = this.created ? this.created : new Date('1970-01-01');

    this.created.toString = this.DateToString.bind(this);

  }//constructor

  DateToString(){

    return this.created.toLocaleDateString('ru-RU') + ' ' + this.created.toLocaleTimeString('ru-RU');

  }//DateToString

}//Task
