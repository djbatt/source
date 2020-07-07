import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Paragraph } from "grommet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "joshua-aragon-FkjaN-7gWC0-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.file.childImageSharp.fluid}
        css={`
          max-height: 360px;
          box-shadow: 0 0px 0.6px -3px rgba(0, 0, 0, 0.073),
            0 0px 2px -3px rgba(0, 0, 0, 0.107),
            0 0px 9px -3px rgba(0, 0, 0, 0.18);
        `}
        alt="Gatsby Development"
      />
      <Heading level={3} color="text">
        Gatsby Development
      </Heading>
      <Paragraph color="text">
        GatsbyJS is one of the newest website frameworks available. It's faster than wordpress and provides many of the same benefits.
      </Paragraph>
    </>
  )
}
