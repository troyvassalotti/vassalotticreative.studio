import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
  // Change the input directory
  src: "./src",
  // Automatically open the browser on dev
  server: {
    open: true,
  },
});

// Static Assets
site.copy("static");

// Plugins
site.use(feed());
site.use(inline());
site.use(metas());
site.use(minify_html());
site.use(sass());

export default site;
