import React from "react"
import Layout from "../utils/templates/layout"
import SEO from "../utils/seo"
import PageContent from "../components/contact"

export default () => {
  return (
    <Layout>
      <SEO
        description="Meta Description"
        title="Source | Website Development and Website Design in Richmond, VA"
      />
      <PageContent />
    </Layout>
  )
}
