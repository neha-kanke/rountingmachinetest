export interface Iuser{
    userName: string;
    userId: string;
    userRole: urole;
}

export enum urole{
    admin="Admin",
    users='Users'
}