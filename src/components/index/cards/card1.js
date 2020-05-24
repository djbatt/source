import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Paragraph } from "grommet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "derrick-brooks-jgMhuuwQVkY-unsplash.jpg" }) {
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
        Local first
      </Heading>
      <Paragraph color="text">
        Founded in 2019, Source was made for Richmonders. Our local experts know the area and can target your audience.
      </Paragraph>
    </>
  )
}
