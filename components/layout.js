import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head";

class Layout extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  constructor() {
    super();

    this.state = { aboutText: "About" };
    this.loading = this.loading.bind(this);
  }

  /**
   * when you click on the about link it will change the text in it and when it finish fetching
   * the /about route data from the api it will transition to the /about page
   */
  loading() {
    if (Router.pathname !== "/about") {
      this.setState({ aboutText: "Fetching about data..." });
      Router.push("/about");
    }
  }
  render() {
    const { title, children } = this.props;
    const { aboutText } = this.state;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <nav>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
            {" | "}
            <a href="#" onClick={this.loading}>
              {aboutText}
            </a>
          </nav>
        </header>

        {children}

        <footer>
          This is the footer
        </footer>
      </div>
    );
  }
}

export default Layout;
