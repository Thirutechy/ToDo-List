import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  

  name="";
  UserList:string[]=[];
  completeItems:string[]=[];
  editIndex:number|null=null;

  save(){
    if(this.editIndex!=null){
      this.UserList = this.UserList.map((val,i)=>{
        if(this.editIndex==i){
          val=this.name
        }
        return val;
      })


    }else{
      this.UserList.push(this.name);

    }
    this.editIndex=null;
    this.name="";
  }

  edit(editIndex:number){
    this.editIndex=editIndex
   const editData= this.UserList.find((val,i)=>{
      return editIndex==i;
    })
    if(editData)
    this.name=editData;
  }

  delete(deleteIndex:number){
   this.UserList = this.UserList.filter((val,i)=>{
      return deleteIndex!=i;
    })
  }

  complete(completeIndex:number){

  const completeItems =  this.UserList.find((val,i)=>{
      return completeIndex==i;
    })
    this.UserList = this.UserList.filter((val,i)=>{
      return completeIndex!==i;
    })
    if(completeItems)
    this.completeItems.push(completeItems);




  }

  }
  //gridview2

