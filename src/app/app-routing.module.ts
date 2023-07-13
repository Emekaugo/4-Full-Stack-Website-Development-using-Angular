import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CategoryComponent } from './components/category/category.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> cc66cbda5e38a44e119dd0ad66e947b65734ee33
