import { gql } from 'graphql-request'

export const authorsQuery = gql`
  query GetAuthors {
    authors {
      name
      intro
      bio
      slug
      picture {
        url
      }
    }
  }
`

export const projectsQuery = gql`
  query GetProjects {
    projects {
      name
      slug
      description
      tags
      demo
      sourceCode
      image {
        url
      }
    }
  }
`

export const projectQuery = gql`
  query GetProject($slug: String!) {
    project(where: { slug: $slug }) {
      name
      slug
      description
      tags
      demo
      sourceCode
      image {
        url
      }
    }
  }
`