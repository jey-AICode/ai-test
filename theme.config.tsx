import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AI Test Blog</span>,
  project: {
    link: 'https://github.com/jey-AICode/ai-test',
  },
  docsRepositoryBase: 'https://github.com/jey-AICode/ai-test',
  footer: {
    text: 'AI Test Blog · Weekly AI digest',
  },
  useNextSeoProps() {
    return { titleTemplate: '%s · AI Test Blog' }
  }
}

export default config
