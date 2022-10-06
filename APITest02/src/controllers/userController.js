// const insert_user_sql_query = `INSERT INTO Users ('Username', 'Password', 'Role') VALUES (?, ?, ?)`;

import { usersData } from "../data";

export const addNewUser = (newUser) => {
  // let data = db
  //   .prepare(insert_user_sql_query)
  //   .run(newUser.username, newUser.password, newUser.role);
  return null;
};

export const getMatchingUser = (loginUser) => {
  const data = usersData;
  // let data = db
  //   .prepare(matching_user_sql_query)
  //   .get(loginUser.usernameLogin, loginUser.passwordLogin);
  return data;
};
