import React from "react"
import Layout from "../utils/templates/layout"
import SEO from "../utils/seo"
import PageContent from "../components/services"

export default () => {
  return (
    <Layout>
      <SEO
        description="Our work is professional and beats the competitors. An effective website doesn't just supplement your business, it's a force multiplier."
        title="Source | Websites, design, development, and network administration."
      />
      <PageContent />
    </Layout>
  )
}
