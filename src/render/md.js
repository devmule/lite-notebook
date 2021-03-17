const TAG_NAME = "user-markdown";

let renderer = null;

async function parse(ch, element) {

    if (!renderer) {
        // init renderer
        renderer = new marked.Renderer();

        const originalRendererLink = renderer.link.bind(renderer);
        const originalRendererImage = renderer.image.bind(renderer);

        renderer.link = (href, title, text) => {
            if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
            let link = originalRendererLink(href, title, text);
            link = link.replace("<a", "<a target='_blank'");
            return link;
        };

        renderer.image = (href, title, text) => {
            if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
            return originalRendererImage(href, title, text);
        };
    }


    let el = document.createElement("div");

    el.innerHTML = marked(ch.content, {renderer});
    if (el.classList) el.classList.add(TAG_NAME);

    element.appendChild(el);
}

const md_parser = {
    types: ['md'],
    parse: parse,
};

export default md_parser;
