import React, { Component } from 'react';
import Link from 'next/link';
class About extends Component {
  render() {
    return (
      <div>
        <Link href="/">Go to home</Link>
        <p>about us</p>
      </div>
    )
  }
}
export default About;
