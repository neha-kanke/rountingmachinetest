import { Iuser, urole } from "../model/users";

export const users :Array<Iuser>=[
    {
        userName: 'Jhon',
        userId: '1',
        userRole : urole.admin
      },
      {
        userName: 'June',
        userId: '2',
        userRole : urole.users
      },
      {
        userName: 'May',
        userId: "3",
        userRole : urole.admin
      },
      {
        userName: 'James',
        userId: "4",
        userRole : urole.users
      },
      {
        userName : "July",
        userId : "5",
        userRole :urole.admin
      },
]