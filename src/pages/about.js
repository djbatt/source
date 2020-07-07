import React from "react"
import Layout from "../utils/templates/layout"
import SEO from "../utils/seo"
import PageContent from "../components/about"

export default () => {
  return (
    <Layout>
      <SEO
        description="Building better websites for businesses in Richmond, VA. Our local experts know the area and can target your audience."
        title="Source | Building better websites for businesses in Richmond, VA."
      />
      <PageContent />
    </Layout>
  )
}
