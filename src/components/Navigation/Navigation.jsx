import React from "react";
import * as S from "./Navigation.styled";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

function Navigation() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={LogoImg} alt="coral logo" />
      </Link>

      <S.Action>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/addbooks">Add Books</S.StyledLink>
        <S.StyledLink to="/login">Login</S.StyledLink>
        <S.StyledLink to="/register">Register</S.StyledLink>
      </S.Action>
    </S.Header>
  );
}

export default Navigation;
