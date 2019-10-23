/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <div>
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="36"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started/install.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('gravity-css/colors.html', this.props.language)}>
              Material Components
            </a>
            <a href={this.docUrl('web-components/accordion.html', this.props.language)}>
              Bootstrap Components
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={'mailto:davodey@gmail.com'}>
             Support Email
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={'https://getbootstrap.com/docs/4.3/components/alerts/'}>Material Design</a>
            <a href={'https://ux.pearson.com/gravity/'}>Bootstrap</a>
            <a href="https://github.com/davodey/flayvor">GitHub</a>
            <a
              className="github-button"
              href={'https://github.com/davodey/flayvor'}
              data-icon="octicon-star"
              data-count-href="/davodey/flayvor"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
        <script src={"https://unpkg.com/@flayvor/top-app-bar"}></script>
      </div>
    );
  }
}

module.exports = Footer;
