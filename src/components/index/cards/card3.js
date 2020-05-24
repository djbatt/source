import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Paragraph } from "grommet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aral-tasher-vWsubsaym3o-unsplash.jpg" }) {
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
        Ease of mind
      </Heading>
      <Paragraph color="text">
        We're experts in web development. Let us focus on your website, so you
        can focus on running your business.
      </Paragraph>
    </>
  )
}
