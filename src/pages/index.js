import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { backgroundAlt, headingColour, textColour, mainColour } from '../variables';

import Hero from '../components/Hero';
import BlogPrompt from '../components/BlogPrompt';
import Container from '../components/Container';
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

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Hero/>
        <WorkWrapper>
          <Container>
            <SectionHeader>Projects</SectionHeader>
            <SectionDescription>Browse through some of the larger projects I've worked on</SectionDescription>
            {posts.map(post => {
              if (post.node.path !== '/404/') {
                const title = get(post, 'node.frontmatter.title') || post.node.path
                return (
                  <div key={post.node.frontmatter.path}>
                    <h3>
                      <Link to={post.node.frontmatter.path} >
                        {post.node.frontmatter.title}
                      </Link>
                    </h3>
                    <small>{post.node.frontmatter.date}</small>
                    <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  </div>
                )
              }
            })}
          </Container>
        </WorkWrapper>
        <OtherWrapper>
          <Container>
            <SectionHeader>Other Work</SectionHeader>
            <SectionDescription>To see a complete list, visit my <a href="#">GitHub</a></SectionDescription>
            <OtherWork name="Day Counter" description="Chrome Extension to track days until or since life events" tags={["Chrome", "JavaScript"]} link="https://chrome.google.com/webstore/detail/day-counter-new-tab-page/popaiegponeiefbiddhmaphpbdjoegff?hl=en" />
            <OtherWork name="Day Counter" description="Chrome Extension to track days until or since life events" tags={["Chrome", "JavaScript"]} />
            <OtherWork name="Day Counter" description="Chrome Extension to track days until or since life events" tags={["Chrome", "JavaScript"]} />
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
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
