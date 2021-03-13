import React, { Component } from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Avatar } from "@material-ui/core";

const Header = ({ user, signOut }) => {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>

      <UserContaier>
        <Name>
          <h6>{user.name}</h6>
        </Name>

        <UserImage onClick={signOut}>
          <img
            src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"}
            alt="profile__pic"
          />
        </UserImage>
      </UserContaier>
    </Container>
  );
};

export default Header;

// Main Component css start here
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
`;

const SearchContainer = styled.div`
  min-width: 280px;
  margin-right: 16px;
  margin-left: 16px;

  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: center;
  }
  input:focus {
    outline: none;
  }
`;

// Main Component css end here

const Container = styled.div`
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;
const Main = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-left: 16px;
`;

const Name = styled.div`
  padding-right: 8px;
  /* width:120px;
  height:50px */
  h6 {
    font-weight: 100;
    font-size: 12px;
  }
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const UserContaier = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;
