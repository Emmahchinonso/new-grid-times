import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --border: 1px solid ${COLORS.gray[300]};
  display: grid;
  gap: 48px;

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
    border-right: var(--border);
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (${QUERIES.mobileAndDown}) {
    grid-template-columns: 1fr;
  }

  @media (${QUERIES.tabletOnly}) {
    grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

const SportsSection = styled.section`
  min-width: 0;
  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (${QUERIES.mobileAndDown}) {
    grid-template-columns: 1fr;
  }

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(220px, 1fr);
    overflow: auto;
    scroll-snap-type: x mandatory;
    & > * {
      scroll-snap-align: center;
    }
  }
`;

export default SpecialtyStoryGrid;
