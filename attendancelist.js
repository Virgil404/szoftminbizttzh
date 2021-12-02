export class attendancelist{

  list =new Array();
    constructor(list){
     this.list=list;
    }
   constructor(){}
    add(name){
    this.list.push(name);
        return this.list
    }
    place(name,index){
        list[index]=name
    }
    has(name){
    return this.list.includes(name);
    }
    getlist(){

        return this.list
    }
}





