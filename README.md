# @tno2007/docx-cleaner-es5

*This library is a fork of '@prezly/docx-cleaner'. I just added ES5 support for use in older, non ES6 browsers.

Normalize dirty HTML and DOCX/RTF documents into clean, understandable HTML

![Version](https://img.shields.io/npm/v/@tno2007/docx-cleaner-es5)
![License](https://img.shields.io/npm/l/@tno2007/docx-cleaner-es5)

## Usage

```html
    <body>
        <textarea name="input" id="input"></textarea>

        <div id="output"></div>

        <script src="dist/cleandocx.umd.js"></script>

        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var input = document.getElementById('input');
                var output = document.getElementById('output');

                input.addEventListener('paste', function (event) {
                    // check that clipboardData contains rtf
                    if (!event.clipboardData.types.includes('text/html')) {
                        return;
                    }

                    const html = event.clipboardData.getData('text/html');
                    const rtf = event.clipboardData.getData('text/rtf');

                    const cleanHtml = cleanDocx.cleanDocx(html, rtf);

                    output.innerHTML = cleanHtml;
                });
            });
        </script>
    </body>
```

# Development

In order to start developing, run the build in watch mode.

## Building

```Shell
pnpm install    # install dependencies
pnpm build      # start watcher
```

## Publishing

```Shell
npm run release     # reinstall & rebuild everything from scratch and...
                    # ...and run a wizard that'll guide you through publishing the npm package
```
