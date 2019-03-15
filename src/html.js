import React from "react";
import PropTypes from "prop-types";

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) => (
  <html {...htmlAttributes} lang="zh">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
      <script src="/iconfont.js" />
      {/* <script src="/vconsole.min.js" /> */}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
    {/* <script>var vConsole = new VConsole();</script> */}
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  headComponents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  bodyAttributes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  preBodyComponents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  body: PropTypes.string,
  postBodyComponents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

HTML.defaultProps = {
  body: "",
  htmlAttributes: {},
  headComponents: null,
  bodyAttributes: {},
  preBodyComponents: null,
  postBodyComponents: null
};

export default HTML;
