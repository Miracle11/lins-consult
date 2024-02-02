import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';



export const SideNav = () => {

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#263238">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={'https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png'}
              alt=""
              style={{ width: '30px' }}
            />
            <h6 className="ml-2">BABYCARE ™</h6>
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/admin">
              <CDBSidebarMenuItem active={window.location.pathname === "/admin"} icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/course">
              <CDBSidebarMenuItem active={window.location.pathname === "/admin/course" || window.location.pathname === "/admin/course/newcourse"} icon="table">Courses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/training">
              <CDBSidebarMenuItem active={window.location.pathname === "/admin/training" || window.location.pathname === "/admin/training/newtraining"} icon="user">Training</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/icebreaker">
              <CDBSidebarMenuItem active={window.location.pathname === "/admin/icebreaker" || window.location.pathname === "/admin/icebreaker/newicebreaker"} icon="chart-line">Ice Breaker</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/quiz">
              <CDBSidebarMenuItem  active={window.location.pathname === "/admin/quiz" || window.location.pathname === "/admin/quiz/newquiz"} icon="exclamation-circle">Quiz</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              fontSize: 16,
            }}
          >
            @lins
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
