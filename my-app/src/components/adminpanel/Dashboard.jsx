import React, { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";


//Importing components
import Sidebar from "../common/Sidebar";
import SmallscreenSidebar from "../common/SmallscreenSidebar";

// Importing images
import img1 from "../../media/avatars/Avatar1.png";
import img2 from "../../media/avatars/Avatar2.png";
import img3 from "../../media/avatars/Avatar3.png";
import img4 from "../../media/avatars/Avatar4.png";
import img5 from "../../media/avatars/Avatar5.png";
import img6 from "../../media/avatars/Avatar6.png";
import img7 from "../../media/avatars/Avatar7.jpg";
import img8 from "../../media/avatars/Avatar8.png";
import img9 from "../../media/avatars/Avatar9.png";
import img10 from "../../media/avatars/Avatar10.png";

// Styled Components
const DashboardContainer = styled.div`
  width: auto;
  display: flex;
 
  margin-top:0.8rem;
  
  height: 80vh;
 
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  width: 14vw;
  height:  ;
`;

const MainContent = styled.div`
  width: 86vw;
  height: 100%;
   padding: 20px;
   
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
  
  
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
`;

const Separator = styled.hr`
  border: none;
  height: 2px;
  background-color: #808b96;
  margin-bottom: 1.5rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #000;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #000;

  input {
    border: none;
    outline: none;
    color:#000;
    background-color: #fff;
    font-size: 16px;
    margin-left: 10px;
    flex: 1;
  }
  @media (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;

const TableContainer = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;                                                         
// #002d4b

const TableHead = styled.thead`
  background-color: #4e5be6;
  color: #fff;

  th {
    padding: 12px 10px;
    text-align: left;
    font-size: 16px;
  }
`;

const TableBody = styled.tbody`
  tr {
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
        &:hover {
    background-color: #ddd;
    color:#000;
  }

  td {
    padding: 10px 10px;
    color:#333;
    
  }
`;

const Status = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) =>
    props.className === "active" ? "#28a745" : "#dc3545"};
  color: #fff;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const AvatarUsernameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 10px 15px;
  background-color: #4e5be6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
&:hover {
    background-color:#131b6b;
  }
  
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #dc3545;
  background-color: #f8d7da;
  border-radius: 5px;
`;

//Styled Components for small screens

const SmallScreenDashboard = styled.div`
  @media (max-width: 768px) {
    min-height: 77.5vh;
    display: block;
    padding: 20px;
    background-color:#f9f9f9;
  }
  display: none;
`;

const Container = styled.div`
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom:0;
  }
`;

const UserCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 15px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const UserMeta = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  // color:#000;
`;

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  color: #000;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardUsername = styled.h3`
  font-size: 18px;
  margin: 0;
  font-weight: 600;
  color:#000;
`;

const CardRole = styled.p`
  font-size: 14px;
  margin: 0;
  color:#555;
`;

const CardEmail = styled.p`
  font-size: 14px;
  margin: 0;
  color: #555;
`;

const CardLowerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => (props.className === "active" ? "#28a745" : "#dc3545")};
`;

function Dashboard() {
  
  const [searchQuery, setSearchQuery] = useState("");

  const tableData = [
    {
      id: 1,
      username: "Gaurav Pawar",
      email: "gaurav@gmail.com",
      role: "Admin",
      permission: "Read, Write, Delete",
      createdDate: "2024-01-01",
      status: "Active",
      imageUrl: img1,
    },
    {
      id: 2,
      username: "Rashmi Desai",
      email: "rashmi12@gmail.com",
      role: "Moderator",
      permission: "Read, Delete",
      createdDate: "2024-02-15",
      status: "Inactive",
      imageUrl: img2,
    },
    {
      id: 3,
      username: "Ishaan Kishan",
      email: "ishaan@gmail.com",
      role: "User",
      permission: "Read",
      createdDate: "2024-03-10",
      status: "Active",
      imageUrl: img3,
    },
    {
      id: 4,
      username: "rohan kapoor",
      email: "rohankapoor@gmail.com",
      role: "Manager",
      permission: "Read, Write",
      createdDate: "2024-04-20",
      status: "Inactive",
      imageUrl: img4,
    },
    {
      id: 5,
      username: "Ajit Pawar",
      email: "ajitpawar@gmail.com",
      role: "User",
      permission: "Read",
      createdDate: "2024-05-05",
      status: "Active",
      imageUrl: img5,
    },
    {
      id: 6,
      username: "Vishal Parekh",
      email: "vishalparekh@gmail.com",
      role: "Moderator",
      permission: "Read, Delete",
      createdDate: "2024-06-18",
      status: "Active",
      imageUrl: img6,
    },
    {
      id: 7,
      username: "Anant Rao",
      email: "anantrao@gmail.com",
      role: "Manager",
      permission: "Read, Write",
      createdDate: "2024-07-10",
      status: "Active",
      imageUrl: img7,
    },
    {
      id: 8,
      username: "Sanya Mehta",
      email: "sanyamehta@gmail.com",
      role: "Admin",
      permission: "Read, Write, Delete",
      createdDate: "2024-08-25",
      status: "Inactive",
      imageUrl: img8,
    },
    {
      id: 9,
      username: "Priya Shah",
      email: "priyashah@example.com",
      role: "User",
      permission: "Read",
      createdDate: "2024-09-12",
      status: "Active",
      imageUrl: img2,
    },
    {
      id: 10,
      username: "Kabir Singh",
      email: "kabir34@gmail.com",
      role: "Admin",
      permission: "Read, Write, Delete",
      createdDate: "2024-10-01",
      status: "Active",
      imageUrl: img10,
    },
    {
      id: 11,
      username: "Salman Sheikh",
      email: "salman@gmail.com",
      role: "Admin",
      permission: "Read, Write, Delete",
      createdDate: "2024-01-05",
      status: "Active",
      imageUrl: img1,
    },
    {
      id: 12,
      username: "Karan Singh",
      email: "karans@gmail.com",
      role: "Manager",
      permission: "Read, Write",
      createdDate: "2024-02-12",
      status: "Active",
      imageUrl: img9,
    },
    {
      id: 13,
      username: "Arvind Mehra",
      email: "arvindmehra@gmail.com",
      role: "Moderator",
      permission: "Read, Delete",
      createdDate: "2024-03-03",
      status: "Inactive",
      imageUrl: img3,
    },
    {
      id: 14,
      username: "Raghav Bansal",
      email: "raghavbansal@gmail.com",
      role: "User",
      permission: "Read",
      createdDate: "2024-04-18",
      status: "Inactive",
      imageUrl: img4,
    },
    {
      id: 15,
      username: "Aditya Chauhan",
      email: "adityachauhan@gmail.com",
      role: "Manager",
      permission: "Read, Write",
      createdDate: "2024-05-25",
      status: "Active",
      imageUrl: img5,
    },
    {
      id: 16,
      username: "Yash Dubey",
      email: "yash@example.com",
      role: "Moderator",
      permission: "Read, Delete",
      createdDate: "2024-06-07",
      status: "Active",
      imageUrl: img6,
    },
    {
      id: 17,
      username: "Rashi Khanna",
      email: "rashi@gmail.com",
      role: "Admin",
      permission: "Read, Write, Delete",
      createdDate: "2024-07-11",
      status: "Inactive",
      imageUrl: img2,
    },
    {
      id: 18,
      username: "Smriti Jain",
      email: "smriti1234@gmail.com",
      role: "User",
      permission: "Read",
      createdDate: "2024-08-23",
      status: "Active",
      imageUrl: img8,
    },
    {
      id: 19,
      username: "Roohi Singh",
      email: "roohisingh@gmail.com",
      role: "User",
      permission: "Read",
      createdDate: "2024-03-10",
      status: "Active",
      imageUrl: img3,
    },
    {
      id: 20,
      username: "Aniket Fating",
      email: "aniketfating@gmail.com",
      role: "Moderator",
      permission: "Read, Delete",
      createdDate: "2024-04-20",
      status: "Inactive",
      imageUrl: img4,
    },
  ];
  // Filter the users based on the search query
  const filteredUsers = tableData.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <DashboardContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainContent >
          <Header >Dashboard</Header>
          <Separator />
          <TopBar>
            <SectionHeading >User List</SectionHeading>
            <SearchContainer >
              <IoSearchOutline />
              <input
                type="text"
                placeholder="Search User..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>
          </TopBar>

          {/* Show error message if no users match */}
          {filteredUsers.length === 0 && searchQuery !== "" && (
            <ErrorMessage>No users found matching "{searchQuery}"</ErrorMessage>
          )}

          {filteredUsers.length > 0 && (
            <TableContainer >
              <Table>
                <TableHead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Permission</th>
                    <th>Created Date</th>
                    <th>Status</th>
                  </tr>
                </TableHead>
                <TableBody >
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>
                        <AvatarUsernameWrapper>
                          <Avatar src={user.imageUrl} />
                          <span>{user.username}</span>
                        </AvatarUsernameWrapper>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.permission}</td>
                      <td>{user.createdDate}</td>
                      <td>
                        <Status
                          className={
                            user.status === "Active" ? "active" : "inactive"
                          }
                        >
                          {user.status}
                        </Status>
                      </td>
                    </tr>
                  ))}
                </TableBody>
              </Table>
              <PaginationWrapper>
                {Array.from(
                  { length: Math.ceil(filteredUsers.length / usersPerPage) },
                  (_, index) => (
                    <PageButton
                      key={index + 1}
                      onClick={() => handlePageClick(index + 1)}
                      style={{
                        backgroundColor:
                          currentPage === index + 1 ? "#131b6b" : "#4e5be6",
                      }}
                   >
                      {index + 1}
                    </PageButton>
                  )
                )}
              </PaginationWrapper>
            </TableContainer>
          )}
        </MainContent>
      </DashboardContainer>

      <SmallScreenDashboard >
        <Container >
          <h1>Dashboard</h1>
          <SmallscreenSidebar />
        </Container>
        <Separator />
        <SectionHeading >User List</SectionHeading>
        <SearchContainer >
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search User..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        {currentUsers.map((user) => (
          <UserCard key={user.id} >
            <UserMeta >
              <UserAvatar src={user.imageUrl} />
              <MetaData>
                <CardUsername >
                  {user.username}
                </CardUsername>
                <CardEmail >{user.email}</CardEmail>
              </MetaData>
            </UserMeta>
            <CardContent>
              <CardLowerWrap>
                <CardRole >{user.role}</CardRole>
                <Status
                  className={user.status === "Active" ? "active" : "inactive"}
                >
                  {user.status}
                </Status>
              </CardLowerWrap>
            </CardContent>
          </UserCard>
        ))}
        <PaginationWrapper>
          {Array.from(
            { length: Math.ceil(filteredUsers.length / usersPerPage) },
            (_, index) => (
              <PageButton
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                style={{
                  backgroundColor:
                    currentPage === index + 1 ? "#131b6b" : "#4e5be6",
                }}
              >
                {index + 1}
              </PageButton>
            )
          )}
        </PaginationWrapper>
      </SmallScreenDashboard>
    </>
  );
}

export default Dashboard;
