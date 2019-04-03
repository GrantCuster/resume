import Head from "next/head";
import React from "react";
import _ from "lodash";
import * as d3 from "d3-time";
import * as d3f from "d3-time-format";
import * as Pluralize from "pluralize";
import * as Bowser from "bowser";

function p(x, y) {
  return `${x}px ${y}px`;
}

let format = d3f.timeFormat("%B %Y");

// with days
function timeSpent(start, end) {
  let raw_months = d3.timeMonth.count(start, end);
  let years = Math.floor(raw_months / 12);
  let months = years > 0 ? raw_months % years : raw_months;
  let months_end = d3.timeMonth.offset(start, raw_months);
  let days = d3.timeDay.count(months_end, end);
  // round months
  if (days > 15) months++;
  let values = [];
  if (years > 0) {
    values.push(years + " " + Pluralize("year", years));
  }
  if (months > 0) {
    values.push(months + " " + Pluralize("month", months));
  }
  if (days > 0) {
    // values.push(days + " " + Pluralize("day", days));
  }
  return values.join(", ");
}

function formatTime(start, end) {
  return (
    format(start) +
    "–" +
    (+end === +new Date() ? "now" : format(end)) +
    ", " +
    timeSpent(start, end)
  );
}

let links = [
  ["http://feed.grantcuster.com", "Work and inspiration in progress."],
  [
    "https://turbofan.fastforwardlabs.com",
    "A Cloudera Fast Forward Labs prototype that places you in the role of turbofan factory owner."
  ],
  [
    "https://fastforwardlabs.github.io/prototype-videos",
    "A video overview of the nine prototypes we've built at Cloudera Fast Forward Labs."
  ],
  [
    "https://beta.observablehq.com/@grantcuster",
    "Code and design experiments in the form of interactive Observable notebooks."
  ],
  [
    "https://grantcuster.github.io/umap-explorer",
    "A proof-of-concept that uses three.js to render tens of thousands of data points in an interactive visualization"
  ],
  ["https://blog.fastforwardlabs.com", "The Cloudera Fast Forward Labs blog."],
  [
    "https://scifi.fastforwardlabs.com",
    "A mini-site showcasing the science fiction stories included in each of the Fast Forward Labs reports."
  ]
];

let description =
  "Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return { test: null };
  }

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      width: null,
      height: null,
      layout: "web",
      render_info: null,
      origin: null
    };
    this.link = this.link.bind(this);
    this.setSize = _.debounce(this.setSize.bind(this), 100);
    this.setLayout = this.setLayout.bind(this);
  }

  setSize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      loaded: true
    });
  }

  componentDidMount() {
    this.setSize();
   window.addEventListener("resize", this.setSize);
    let render_info = Bowser.getParser(window.navigator.userAgent).parse()
      .parsedResult;
    this.setState({ render_info, origin: window.location.href });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSize);
  }

  setLayout(layout) {
    this.setState({ layout: layout });
  }

  link(href) {
    return <a href={href}>{href}</a>;
  }

  render() {
    let { loaded, width, height, layout, render_info, origin } = this.state;
    let font_size = 16;
    let line_height = 1.5;
    let grem = font_size * line_height;

    let column_target = grem * 14;
    let columns = Math.max(1, Math.round(width / column_target));
    let column_width = width / columns;
    let main_width = Math.min(columns, 2) * column_width;
    let main_margin =
      Math.floor((columns - Math.min(columns, 2)) / 2) * column_width;

    if (layout === "print") {
      width = null;
      height = null;
    }

    if (width === null) {
      main_width = "auto";
      main_margin = 0;
    }

    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#efefef" />
          <title>Grant Custer → Résumé</title>
          <meta type="description" value={description} />
          <meta property="og:title" content="Grant Custer → Résumé" />
          <meta property="og:description" content={description} />
          <meta property="og:url" content="http://resume.grantcuster.com" />
          <meta name="twitter:card" content="summary" />
          <style>{`.js-no-flash { display: none }`}</style> 
          <noscript>
            <style>{`.js-no-flash { display: block }`}</style> 
          </noscript>
        </Head>
        <div className="js-no-flash" style={{ display: loaded ? 'block' : null }}>
          <div style={{ padding: grem / 2 }}>
            <div>Grant Custer</div>
            <div>Design–Code</div>
            <div style={{ minHeight: grem }}>
              <span className="print-hide">
                {width !== null && height !== null
                  ? `${width}x${height}`
                  : null}
              </span>
            </div>
            <div>Résumé</div>
          </div>
          <div
            className="content"
            style={{
              width: main_width,
              padding: grem / 2,
              marginLeft: main_margin
            }}
          >
            <div>Grant Custer</div>
            <div style={{ marginBottom: grem }}>
              <p>{description}</p>
            </div>
            <div style={{ marginBottom: grem * 1 }}>
              <div>Work experience</div>
            </div>
            <div style={{ marginBottom: grem * 1 }}>
              <div>Designer–developer, Cloudera Fast Forward Labs</div>
              <div>{formatTime(new Date(2014, 7, 7), new Date())}</div>
              <div>
                <p>
                  Designed and coded the interfaces for nine product prototypes
                  demonstrating the possibilities of emerging technologies.
                </p>
                <p>
                  Designed the Fast Forward Labs brand and surrounding material,
                  including nine printed research reports, the website, the
                  blog, and internal tools. Post-Cloudera acquisition (in 2017)
                  I've been working to integrate that brand into the larger
                  Cloudera brand system.
                </p>
                <p>
                  Managed two projects by FFL interns, where they scoped,
                  created and released their own prototypes.
                </p>
              </div>
            </div>
            <div style={{ marginBottom: grem * 1 }}>
              <div>Designer–developer, Betaworks</div>
              <div>
                {formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))}
              </div>
              <p>
                Designed and coded the interfaces for early-stage (under
                four-person) start-ups.
              </p>
            </div>
            <div style={{ marginBottom: grem * 1 }}>
              <div>Designer–developer, Banters</div>
              <div>
                {formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))}
              </div>
              <p>
                Designed and coded interfaces for a start-up focused on
                capturing memorable conversations.
              </p>
            </div>
            <div style={{ marginTop: grem }}>
              <div>Code and software experience</div>
              <p>Code: Javascript, React, D3.js, three.js.</p>
              <p>Software: Figma, Photoshop, Illustrator, InDesign.</p>
            </div>
            <div style={{ marginBottom: grem, marginTop: grem }}>
              <div>Links</div>
              <div>
                {links.map(l => (
                  <p>
                    {this.link(l[0])} – {l[1]}
                  </p>
                ))}
              </div>
            </div>
            <div style={{}}>
              <div>Contact</div>
              <p>Email: grantcuster@gmail.com</p>
              <p>
                Twitter:{" "}
                <a href="https://twitter.com/GrantCuster">@GrantCuster</a>
              </p>
            </div>
          </div>
          <div style={{ padding: grem / 2 }}>
            Generated
            {origin !== null ? (
              <span> from {this.link(origin)}</span>
            ) : null} on {new Date().toLocaleString()}
            {render_info !== null
              ? ` with ${render_info.browser.name} ${
                  render_info.browser.version
                } on ${render_info.os.name} ${render_info.os.version}`
              : null}
            .
          </div>
        </div>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          @page {
            margin: calc(0.75in - ${grem}px);
          }
          @media print {
            .content {
              width: auto !important;
              margin: auto !important;
            }
            .print-hide {
              display: none;
            }
          }
          html {
            font-size: ${font_size}px;
            line-height: ${line_height};
          }
          body {
            margin: 0;
            background: #efefef;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
          }
          p {
            margin: 0;
            text-indent: ${grem}px;
          }
          a {
            color: black;
            word-break: break-all;
            word-break: break-word;
          }
          button {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            border: none;
            padding: 0;
            margin: 0;
            text-decoration: underline;
            background: transparent;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
