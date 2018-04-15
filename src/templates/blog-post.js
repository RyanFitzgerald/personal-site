import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import get from 'lodash/get';

import SubHeader from '../components/SubHeader';
import Project from '../components/Project';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <SubHeader title={post.frontmatter.title} type={post.frontmatter.type} />
        <Project>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Project>
      </div>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        type
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
