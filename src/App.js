import { Routes, Route, Link } from "react-router-dom";
// import Users from './components/Users';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp'
import styled from 'styled-components';
import Users from './components/Users';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;



// import './App.css';

function App() {
  return (
    <Wrapper>
      <Routes>
      <Route path="/" element={<Posts />} />
        <Route path="/new" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-users" element={<Users />} />

      </Routes>
    </Wrapper>
  );
}

export default App;
