import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component"
import { PorpaisComponent } from "./pais/pages/porpais/porpais.component"
import { PorregionComponent } from "./pais/pages/porregion/porregion.component"
import { VerpaisComponent } from "./pais/pages/verpais/verpais.component"

const routes : Routes = [
    {
        path:'',
        component:PorpaisComponent,
        pathMatch:"full"
    },
    {
        path:'region',
        component:PorregionComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'pais/:id',
        component: VerpaisComponent
    },
    {
        path: '**',
        redirectTo:''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}