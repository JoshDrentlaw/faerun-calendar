import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Waterdeep Calendar</h1>
    <section id="calendar-container">
      <div id="calendar-grid">
        {/* MONTH HEADER */}
        <div class="flex-center" id="year"><span id="current-year">1491</span> DR</div>
        <div class="flex-center" id="prev-month">&lt;</div>
        <div class="flex-center" id="month-container">
          <header id="month">Hammer</header>
          <header id="common-name">Deepwinter</header>
        </div>
        <div class="flex-center" id="next-month">&gt;</div>
        <div class="flex-center" id="year-common-name">Year of the Scarlet Witch</div>
        {/* DAY NAME HEADERS */}
        <div class="day-header">First</div>
        <div class="day-header">Second</div>
        <div class="day-header">Third</div>
        <div class="day-header">Forth</div>
        <div class="day-header">Fifth</div>
        <div class="day-header">Sixth</div>
        <div class="day-header">Seventh</div>
        <div class="day-header">Eighth</div>
        <div class="day-header">Ninth</div>
        <div class="day-header">Tenth</div>
        {/* DAYS */}
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
      </div>
      <div id="major-holiday-overlay">
        <section id="major-holiday-desc"></section>
      </div>
    </section>
  </Layout>
)

export default IndexPage
