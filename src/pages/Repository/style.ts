import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #a8a8b3;
    font-size: 19px;
    text-decoration: none;
    display: flex;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      height: 120px;
      width: 120px;
    }
    div {
      margin-left: 20px;
    }
    strong {
      font-size: 36px;
      color: #3d3d4d;
    }
    p {
      font-size: 20px;
      color: #737380;
      margin-top: 12px;
    }
  }
  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;
    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        color: #3d3d4d;
        font-size: 36px;
      }
      span {
        color: #6c6c80;
        font-size: 20px;
        display: block;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
    div {
      margin: 0 22px;
      flex: 1;
      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      color: #c9c9d4;
      margin-left: auto;
    }
  }
`;
