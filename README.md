<h1 align="center">scroll-util</h1>
<p align="center">
    A library for scrolling utility functions in web development.
</p>

<div align="center">
    <a href="https://npmjs.com/package/scroll-util">
        <img src="https://img.shields.io/npm/v/scroll-util?color=red&logo=npm&style=for-the-badge">
    </a>
    <a href="https://github.com/r1zyn/scroll-util/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/r1zyn/scroll-util?color=yellow&logo=apache&style=for-the-badge" />
    </a>
    <img src="https://img.shields.io/github/languages/top/r1zyn/scroll-util?logo=typescript&style=for-the-badge" />
    <img src="https://img.shields.io/github/last-commit/r1zyn/scroll-util?logo=github&style=for-the-badge" />
</div>

## Installation

```sh
# npm
npm install scroll-util

# yarn
yarn add scroll-util
```

## Usage

### React

```jsx
import { scrollToElement } from "scroll-util";
import { useEffect } from "react";

function MyComponent() {
    return (
        <button onClick={() => scrollToElement("my-div")}>Click me!</button>
        <div id="my-div" style={{
            height: "100vh",
            width: "100%"
        }}>
            <span>My div</span>
        </div>
    );
}
```

### Browser

scroll-util currently does not support browser JS but will do so in the future.

Note: documentation in development

## Links

* [GitHub](https://github.com/r1zyn/scroll-util)
* [npm](https://www.npmjs.com/package/scroll-util)

## License

This project is licensed under the [Apache-2.0](https://github.com/r1zyn/scroll-util/blob/master/LICENSE) license.
