import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { ExamList } from "./exam/ExamList";
import { ExamCreate } from "./exam/ExamCreate";
import { ExamEdit } from "./exam/ExamEdit";
import { ExamShow } from "./exam/ExamShow";
import { ProctoringList } from "./proctoring/ProctoringList";
import { ProctoringCreate } from "./proctoring/ProctoringCreate";
import { ProctoringEdit } from "./proctoring/ProctoringEdit";
import { ProctoringShow } from "./proctoring/ProctoringShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"OnlineExamProctoring"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Exam"
          list={ExamList}
          edit={ExamEdit}
          create={ExamCreate}
          show={ExamShow}
        />
        <Resource
          name="Proctoring"
          list={ProctoringList}
          edit={ProctoringEdit}
          create={ProctoringCreate}
          show={ProctoringShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
