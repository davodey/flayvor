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
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started/install.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('gravity-css/colors.html', this.props.language)}>
              Gravity CSS
            </a>
            <a href={this.docUrl('web-components/accordion.html', this.props.language)}>
              Web Components
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={'mailto:GPDgravitydev@grp.pearson.com'}>
             Support Email
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={'https://ux.pearson.com/gravity/'}>Gravity Design System</a>
            <a href="https://github.com/pearson-ux/web-components">GitHub</a>
            <a
              className="github-button"
              href={'https://github.com/pearson-ux/web-components'}
              data-icon="octicon-star"
              data-count-href="/pearson-ux/web-components"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
        <script src="https://unpkg.com/@pearson-ux/pearson-web-components"></script>
        <script src="https://pearsonux.sfo2.cdn.digitaloceanspaces.com/js/tippy.js"></script>
      </div>
    );
  }
}

module.exports = Footer;
