import MyFormEdit from "../pages/Edit";
import LandingPage from "../pages/LadingPage";


const publicRoute = [
    {
        path:"/",
        component:LandingPage
    },
    {
        path: "/editContact/:id",
        component: MyFormEdit
    }
]

export default publicRoute