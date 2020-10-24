import { Injectable } from '@angular/core';
import { Table } from './table';

@Injectable({
  providedIn: 'root'
})

//local storage
export class StorageService extends Table{

  constructor() { 
    super();
  }

  set(table, value){
    try{
      this.mut[table] = value;
      this.obs[table].next(value);
      return localStorage.setItem(table, JSON.stringify(value));
    } catch (e){
      throw e;
    }
  }

  get<T>(table){
    try{
      return JSON.parse(localStorage.getItem(table));
    }catch (e){
      throw e;
    }
  }

  observable(table){
    try{
      return this.obs[table];
    } catch (e){
      throw e;
    }
  }

  value(table){
    try{
      return this.mut[table];
    } catch (e){
      throw e;
    }
  }

   clear(table){
    try{
      this.mut[table] = null;
      this.obs[table].next(null);
      return localStorage.removeItem(table);
    } catch (e){
      throw e;
    }
  }

  clearAll(){
    try{
      localStorage.clear();
    } catch (e) {
      throw e;
    }
  }
  
}
