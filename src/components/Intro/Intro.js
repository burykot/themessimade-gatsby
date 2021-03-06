import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './Intro.scss';
import SocialIcons from '../SocialIcons/SocialIcons';

const Intro = () => {
  const introImageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "NOX5R-sm.jpg" }) {
        childImageSharp {
          fixed(width: 800, quality: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="intro__wrapper">
      <div className="intro">
        <h2 className="intro__headline">Hello FPV world!</h2>
        <p>My name is Konrad and I&apos;m an <a href="https://en.wikipedia.org/wiki/First-person_view_(radio_control)">FPV</a> pilot! the purpose of this site is to list some of my
        "achievements" - reviews, tests, mods, articles and adventures.</p>
        <p>I mostly fly quadcopters that I build myself. If you are interested in joining the fun, you can find a lot of resources needed to learn how to build your own RC craft:</p>
          <ul>
            <li>read on <a href="https://oscarliang.com/">Oscar Liangs</a> site</li>
            <li>ask on <a href="http://intofpv.com/">Intofpv forum</a> and <a href="https://web.facebook.com/groups/Copter.Fans">facebook group</a></li>
            <li>watch on <a href="https://www.youtube.com/channel/UCX3eufnI7A2I7IkKHZn8KSQ">Joshua Bardwells videos</a></li>
          </ul>
        <p>Also - feel free to PM me on intofpv or instagram</p>

      </div>
      <Img fixed={introImageQuery.file.childImageSharp.fixed} alt="DemonRC NOX5R racing quadcopter frame" />

      <SocialIcons />
    </div>
  )
}

export default Intro;
