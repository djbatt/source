import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Paragraph } from "grommet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "derrick-brooks-dqgVnnRzPio-unsplash.jpg" }) {
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
        `}
        alt="Rockett's Landing Bus RVA"
      />
      <Heading level={3} color="text">
        Superior results
      </Heading>
      <Paragraph color="text">
        Our work is professional and beats the competitors. An effective website doesn't just supplement your business, it's a force multiplier.
      </Paragraph>
    </>
  )
}
