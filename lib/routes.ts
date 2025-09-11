import { createRouteMatcher } from "@clerk/nextjs/server";


export const routeMatchers = {
    admin: createRouteMatcher ([
        "/admin(.*)",
        "/patient(.*)",
        "/record/users",
        "/record/doctors(.*)",
        "/record/patients",
        "/record/doctors",
        "/record/patients",
        
    ]),
    
patient: createRouteMatcher(["/patient(.*)", "/patient/registrations"]),

doctor: createRouteMatcher([
    "/doctors(.*)",
    "/record/doctors(.*)",
    "/record/patients",
    "/patient(.*)",
    "/record/staffs",
    "/record/patients",
]),

};