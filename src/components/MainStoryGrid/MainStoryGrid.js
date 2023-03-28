import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --border: 1px solid ${COLORS.gray[300]};
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px 0;
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
      "main-story secondary-stories "
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
  }

  @media (${QUERIES.laptopAndUp}) {
    & {
      grid-template-areas:
        "main-story secondary-stories opinion-stories"
        "main-story advertisement advertisement";
      gap: 16px 0;
      grid-template-columns: 493px 1.3fr 1fr;
    }
  }
`;

const StoryList = styled.div`
  --border-bottom: var(--border);
  --spacing: 16px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);

  & > *:not(:last-child) {
    border-bottom: var(--border-bottom);
    padding-bottom: var(--spacing);
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media (${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    border-right: var(--border);
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  & > ${StoryList} {
    @media (${QUERIES.laptopAndUp}) {
      padding-right: 16px;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  & > ${StoryList} {
    @media (${QUERIES.tabletOnly}) {
      --spacing: 0;
      --border-bottom: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(172px, 1fr));
      gap: 32px;
    }
  }

  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
    border-left: var(--border);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media (${QUERIES.laptopAndUp}) {
    padding-top: 16px;
    border-top: var(--border);
  }
`;

export default MainStoryGrid;
