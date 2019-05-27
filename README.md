# UU Workshop 2.0

## Content of this repo

This repository contains an example of a legacy web page, which is lacking some accessibility features.

Your task is to take this web page, and improve the accessibility!

## Starting the test-server

```bash
npm install
npm run start
```

Web page will open on port 3000.

## Tasks

 1. Navigate trough the whole page with a [screen reader](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn)
 2. Run lighthouse on the page, and fix any errors found (<kbd>F12</kbd> in Chrome + Audits tab)
 3. Run "FastPass" in [Accessibility insights](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni) on the page, and fix any errors found
 4. Go trough the page with the following WCAG 2.0 criteria prioritized:
    - 1.1.1 Non-text content
    - 1.3.1 Info and Relationships
    - 2.4.1 Bypass blocks
    - 2.4.7 Focus visible
    - 3.3 Input assistance
    
## Resources

 * [WCAG 2.0 hos Difi](https://uu.difi.no/krav-og-regelverk/wcag-20-standarden)
 * [WCAG Quickref](https://www.w3.org/WAI/WCAG21/quickref/)
 * [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/) (This is an important one!)
 * [MDN - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
