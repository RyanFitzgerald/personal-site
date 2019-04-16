import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { backgroundAlt, headingColour, textColour, mainColour } from '../variables';

import Hero from '../components/Hero';
import BlogPrompt from '../components/BlogPrompt';
import Container from '../components/Container';
import Work from '../components/Work';
import OtherWork from '../components/OtherWork';

const WorkWrapper = styled.div`
  padding: 75px 0 45px;
`;

const OtherWrapper = styled.div`
  background: ${backgroundAlt};
  padding: 75px 0 45px;
`;

const SectionHeader = styled.h2`
  color: ${headingColour};
  margin: 0;
  text-align: center;
`;

const SectionDescription = styled.p`
  color: ${textColour};
  margin: 0 0 75px;
  text-align: center;

  a {
    color: ${mainColour};
    text-decoration: none;
  }
`;

const OtherWorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Hero/>
        <WorkWrapper id="projects">
          <Container>
            <SectionHeader>Projects</SectionHeader>
            <SectionDescription>Browse through some of the larger projects I've worked on</SectionDescription>
            {posts.map(post => {
              if (post.node.path !== '/404/') {
                return (
                  <Work 
                    key={post.node.frontmatter.path}
                    title={post.node.frontmatter.title}
                    type={post.node.frontmatter.type}
                    link={post.node.frontmatter.path}
                    image={post.node.frontmatter.thumbnail.childImageSharp.responsiveSizes.src}
                  />
                )
              }
            })}
          </Container>
        </WorkWrapper>
        <OtherWrapper>
          <Container>
            <SectionHeader>Other Work</SectionHeader>
            <SectionDescription>To see a complete list, visit my <a href="https://github.com/RyanFitzgerald">GitHub</a></SectionDescription>
            <OtherWorkWrapper>
              <OtherWork name="Day Counter" description="Chrome Extension to track days until or since life events" tags={["Chrome", "JavaScript"]} link="https://chrome.google.com/webstore/detail/day-counter-new-tab-page/popaiegponeiefbiddhmaphpbdjoegff?hl=en" />
              <OtherWork name="Personal Blog" description="My personal blog built in Gatsby and React" tags={["React", "GatsbyJS"]} link="https://github.com/RyanFitzgerald/personal-blog" />
              <OtherWork name="Personal Site" description="My personal site (this one!) built in Gatsby and React" tags={["React", "GatsbyJS"]} link="https://github.com/RyanFitzgerald/personal-site" />
              <OtherWork name="Vertical Timeline" description="An open-source, responsive vertical timeline generator" tags={["JavaScript", "jQuery"]} link="https://github.com/RyanFitzgerald/vertical-timeline" />
              <OtherWork name="TagSelector" description="An open-source JS plugin to turn multiselects into selectable tag clouds" tags={["JavaScript", "SASS"]} link="https://github.com/RyanFitzgerald/tagselector" />
              <OtherWork name="RenovAction.ca" description="Designed and developed a fully custom WordPress theme for local company" tags={["WordPress", "SASS", "JavaScript", "PHP"]} link="https://renovaction.ca/" />
            </OtherWorkWrapper>
          </Container>
        </OtherWrapper>
        <BlogPrompt/>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            type
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
