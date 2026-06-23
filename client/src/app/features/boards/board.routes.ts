import { Routes } from "@angular/router"
import { BoardsComponent } from "./boards.js"
import { BoardDetails } from "./board-details/board-details"

export const boardRoutes : Routes = [
    {
        path : '',
        component : BoardsComponent,
    },

    {
        path:'boardDetails/:boardId',
        component:BoardDetails
    }
    
] 