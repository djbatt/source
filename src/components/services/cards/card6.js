import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Paragraph } from "grommet"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "scott-graham-5fNmWej4tAA-unsplash.jpg" }) {
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
        alt="Consultation"
      />
      <Heading level={3} color="text">
        Professional Consultation
      </Heading>
      <Paragraph color="text">
        Even if you don't work with us we can still help grow your business. Contact us if you need an expert opinion on your website.
      </Paragraph>
    </>
  )
}
