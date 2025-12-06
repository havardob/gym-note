/** @type {import("stylelint").Config} */

const config = {
  "rules": {
    "declaration-no-important": true,
    "declaration-property-unit-allowed-list": {
      "font-size": ["em", "rem"],
      "/^padding/": ["em", "rem", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "/^margin/": ["em", "rem", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "row-gap": ["em", "rem", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "column-gap": ["em", "rem", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "gap": ["em", "rem", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "/^inset/": ["em", "rem", "%", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "top": ["em", "rem", "%", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "left": ["em", "rem", "%", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "right": ["em", "rem", "%", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "bottom": ["em", "rem", "%", "vh", "dvh", "svh", "vw", "dvw", "svw"],
      "/^animation/": ["s", "ms"],
      "border": ["px", "rem"],
      "border-width": ["px", "rem"],
      "border-radius": ["px", "rem", "%"],
      "border-top-left-radius": ["px", "rem", "%"],
      "border-top-right-radius": ["px", "rem", "%"],
      "border-bottom-left-radius": ["px", "rem", "%"],
      "border-bottom-right-radius": ["px", "rem", "%"],
      "line-height": ["", "%"]
    },
    "font-family-no-duplicate-names": true,
    "no-duplicate-at-import-rules": true,
    "no-empty-source": true,
    "media-query-no-invalid": true,
    "named-grid-areas-no-invalid": true,
    "string-no-newline": true,
    "no-irregular-whitespace": true,
    "function-calc-no-unspaced-operator": true,
    "keyframe-block-no-duplicate-selectors": true,
    "color-hex-length": "long",
    "font-weight-notation": "numeric",
    "shorthand-property-no-redundant-values": true,
    "custom-property-no-missing-var-function": true,
    "nesting-selector-no-missing-scoping-root": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-anb-no-unmatchable": true,
    "property-disallowed-list": [
      "flex",
      "background"
    ],
    "declaration-property-max-values": {
      "/^margin/": 1,
      "/^padding/": 1
    },
    "max-nesting-depth": [2, { "ignore": ["blockless-at-rules"] }],
    "selector-type-case": "lower",
    "value-keyword-case": "lower",
    "selector-max-type": [0, { "ignore": ["child", "descendant"] }
    ]
  }
};

export default config;
