import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListPageComponent } from "./product-list-page/product-list-page.component";
import { BoardComponent } from "./solitaire-page/board/board.component";
import { TicTacToePageComponent } from "./tic-tac-toe-page/tic-tac-toe-page.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "product-list-page", component: ProductListPageComponent},
  {path: "tic-tac-toe", component: TicTacToePageComponent},
  {path: "solitaire", component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
