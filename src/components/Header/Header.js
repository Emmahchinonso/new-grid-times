import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search color={`${COLORS.gray[900]}`} size={24} />
          </button>
          <button>
            <Menu color={`${COLORS.gray[900]}`} size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeGroup>
          <Button>Subscribe</Button>
          <SubscribeLink href="/">Already a subscriber?</SubscribeLink>
        </SubscribeGroup>
      </DesktopHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const SubscribeGroup = styled.div`
  justify-self: end;
  position: relative;
  gap: 8px;
`;

const SubscribeLink = styled.a`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  font-style: italic;
  text-align: center;
  text-decoration: underline;
  color: var(--color-gray-900);
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const DesktopHeader = styled(MainHeader)`
  display: none;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
