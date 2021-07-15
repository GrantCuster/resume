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
  [
    "https://constraint.systems",
    "An ongoing project where I design and code experimental web-based creative tools.",
  ],
  [
    "https://activelearner.fastforwardlabs.com",
    "A visualization of how you can use active learning to select training examples to label. I used three.js to render the points and animate the results of each training step.",
  ],
  [
    "https://turbofan.fastforwardlabs.com/",
    "Turbofan Tycoon illustrates the strengths of federated learning by letting you choose a maintenance strategy for your factory of turbofans. I had a lot of fun building a fast-moving turbofan dashboard.",
  ],
  ["https://feed.grantcuster.com", "Work and inspiration in progress."],
  [
    "https://blog.fastforwardlabs.com",
    "The Cloudera Fast Forward Labs blog. I built and maintain the blog (in Hugo!) and also do a lot of the design work displayed on it.",
  ],
  ["https://grantcuster.com", "My index page, featuring even more links."],
];

let description =
  "Designer-programmer. Interested in alternative interfaces and demystifying computers.";

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
      origin: null,
    };
    this.link = this.link.bind(this);
    this.setSize = _.debounce(this.setSize.bind(this), 100);
    this.setLayout = this.setLayout.bind(this);
  }

  setSize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      loaded: true,
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
        <div
          className="js-no-flash"
          style={{ display: loaded ? "block" : null }}
        >
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
              marginLeft: main_margin,
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
              <div>Designer–developer, Stealth StartUp</div>
              <div>{formatTime(new Date(2021, 1, 15), new Date())}</div>
            </div>

            <div style={{ marginBottom: grem * 1 }}>
              <div>Designer–developer, Cloudera Fast Forward Labs</div>
              <div>
                {formatTime(new Date(2014, 7, 7), new Date(2021, 1, 15))}
              </div>
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
              <p>Code: Javascript, React, D3.js, three.js, HTML, CSS.</p>
              <p>Software: Figma, Photoshop, Illustrator, InDesign.</p>
            </div>
            <div style={{ marginBottom: grem, marginTop: grem }}>
              <div>Links</div>
              <div>
                {links.map((l) => (
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
              <p>
                Mastodon:{" "}
                <a href="https://vis.social/@GrantCuster">@GrantCuster</a>
              </p>
            </div>
          </div>
          <div style={{ padding: grem / 2 }}>
            Generated
            {origin !== null ? (
              <span> from {this.link(origin)}</span>
            ) : null} on {new Date().toLocaleString()}
            {render_info !== null
              ? ` with ${render_info.browser.name} ${render_info.browser.version} on ${render_info.os.name}`
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
