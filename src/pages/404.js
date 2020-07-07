import React from "react"
import Layout from "../utils/templates/layout"
import SEO from "../utils/seo"
import PageContent from "../components/404"

export default () => {
  return (
    <Layout>
      <SEO
        description="We make websites that outrank your competitors. One size doesn't fit all because every business is different. A custom website from Source makes you stand out, boosting traffic and driving sales."
        title="Source | Website design and web development in Richmond, VA."
      />
      <PageContent />
    </Layout>
  )
}
