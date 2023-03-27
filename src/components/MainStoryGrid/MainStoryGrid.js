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
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
      "main-story secondary-stories "
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  & > ${StoryList} {
    @media (${QUERIES.tabletOnly}) {
      --border: 1px solid ${COLORS.gray[300]};
      gap: 16px;
      border-left: var(--border);
      padding-left: 16px;

      & > *:not(:last-child) {
        border-bottom: var(--border);
        padding-bottom: 16px;
      }
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  & > ${StoryList} {
    @media (${QUERIES.tabletOnly}) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(172px, 1fr));
      gap: 32px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
