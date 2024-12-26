export type Reference = {
  id: string;
  references: ReferenceLink[];
};

export type ReferenceLink = {
  type: "basic" | "advanced";
  url: string;
};

export const backendReferences: Reference[] = [
  {
    id: "jwt",
    references: [
      {
        type: "basic",
        url: "https://jwt.io/introduction",
      },
      {
        type: "basic",
        url: "https://workos.com/blog/oauth-and-jwt-how-to-use-and-best-practices",
      },
    ],
  },
  {
    id: "rest",
    references: [
      {
        type: "basic",
        url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/",
      },
      {
        type: "basic",
        url: "https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/",
      },
    ],
  },
  {
    id: "oop",
    references: [
      {
        type: "basic",
        url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
      },
      {
        type: "basic",
        url: "https://medium.com/data-bistrot/composition-vs-inheritance-in-python-oop-d4b3c3d8b463",
      },
    ],
  },
  {
    id: "oop",
    references: [
      {
        type: "basic",
        url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
      },
      {
        type: "basic",
        url: "https://medium.com/data-bistrot/composition-vs-inheritance-in-python-oop-d4b3c3d8b463",
      },
    ],
  },
  {
    id: "sql-design",
    references: [
      {
        type: "basic",
        url: "https://en.wikipedia.org/wiki/Database_normalization",
      },
      {
        type: "basic",
        url: "https://www.fullstackpython.com/object-relational-mappers-orms.html",
      },
    ],
  },
  {
    id: "sql-query",
    references: [
      {
        type: "basic",
        url: "https://docs.sqlalchemy.org/en/20/orm/queryguide/relationships.html",
      },
      {
        type: "basic",
        url: "https://docs.sqlalchemy.org/en/14/core/pooling.html",
      },
    ],
  },
  {
    id: "nosql",
    references: [
      {
        type: "basic",
        url: "https://www.mongodb.com/docs/manual/crud/",
      },
      {
        type: "basic",
        url: "https://documentdatabase.org/blog/json-performance-postgres-vs-mongodb/",
      },
    ],
  },
  {
    id: "cors",
    references: [
      {
        type: "basic",
        url: "https://fastapi.tiangolo.com/tutorial/cors/#origin",
      },
      {
        type: "basic",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
      },
    ],
  },
  {
    id: "sql-inject",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/sql/sql_injection.asp",
      },
      {
        type: "basic",
        url: "https://portswigger.net/web-security/sql-injection",
      },
    ],
  },
  {
    id: "ssl",
    references: [
      {
        type: "basic",
        url: "https://www.digicert.com/what-is-ssl-tls-and-https",
      },
      {
        type: "basic",
        url: "https://nginx.org/en/docs/http/configuring_https_servers.html",
      },
      {
        type: "basic",
        url: "https://www.linode.com/docs/guides/getting-started-with-nginx-part-3-enable-tls-for-https/",
      },
    ],
  },
  {
    id: "cookie",
    references: [
      {
        type: "basic",
        url: "https://swagger.io/docs/specification/authentication/cookie-authentication/",
      },
      {
        type: "basic",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
      },
      {
        type: "advanced",
        url: "https://requestly.com/blog/what-are-x-forwarded-headers-and-why-it-is-used/",
      },
      {
        type: "advanced",
        url: "https://traefik.io/glossary/what-are-sticky-sessions/",
      },
    ],
  },
  {
    id: "oauth",
    references: [
      {
        type: "basic",
        url: "https://oauth.net/2/",
      },
      {
        type: "basic",
        url: "https://fusionauth.io/articles/oauth/modern-guide-to-oauth",
      },
    ],
  },
  {
    id: "appservice",
    references: [
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/app-service/overview",
      },
      {
        type: "basic",
        url: "https://devblogs.microsoft.com/devops/comparing-azure-static-web-apps-vs-azure-webapps-vs-azure-blob-storage-static-sites/",
      },
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
      },
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/app-service/deploy-ci-cd-custom-container?tabs=acr&pivots=container-linux",
      },
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs",
      },
    ],
  },
  {
    id: "function",
    references: [
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=get-started%2Casgi%2Capplication-level&pivots=python-mode-decorators",
      },
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=get-started%2Casgi%2Capplication-level&pivots=python-mode-configuration",
      },
      {
        type: "basic",
        url: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=in-process%2Cnodejs-v3%2Cv1-model&pivots=python",
      },
    ],
  },
  {
    id: "async",
    references: [
      {
        type: "basic",
        url: "https://realpython.com/async-io-python/",
      },
    ],
  },
  {
    id: "concurrency",
    references: [
      {
        type: "basic",
        url: "https://realpython.com/python-gil/",
      },
    ],
  },
  {
    id: "module",
    references: [
      {
        type: "basic",
        url: "https://docs.python.org/3/tutorial/modules.html",
      },
      {
        type: "basic",
        url: "https://realpython.com/python-namespace-package/",
      },
    ],
  },
];

export const frontendReferences: Reference[] = [
  {
    id: "seo",
    references: [
      {
        type: "basic",
        url: "https://dataimpact.vn/blog/10",
      },
      {
        type: "advanced",
        url: "https://github.com/theskumar/python-dotenv",
      },
      {
        type: "advanced",
        url: "https://pip.pypa.io/en/stable",
      },
    ],
  },
  {
    id: "box-model",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/css/css_boxmodel.asp",
      },
    ],
  },
  {
    id: "Layout",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/css/css_grid.asp",
      },
      {
        type: "basic",
        url: "https://www.w3schools.com/css/css3_flexbox.asp",
      },
    ],
  },
  {
    id: "responsive",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/css/css_rwd_intro.asp",
      },
      {
        type: "basic",
        url: "https://tailwindcss.com/docs/responsive-design",
      },
    ],
  },
  {
    id: "positioning",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/css/css_positioning.asp",
      },
    ],
  },
  {
    id: "tailwind",
    references: [
      {
        type: "basic",
        url: "https://tailwindcss.com/docs/utility-first",
      },
      {
        type: "advanced",
        url: "https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b",
      },
    ],
  },
  {
    id: "ES6",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/js/js_es6.asp",
      },
      {
        type: "basic",
        url: "https://www.javascripttutorial.net/es6/",
      },
    ],
  },
  {
    id: "event-loop",
    references: [
      {
        type: "advanced",
        url: "https://www.lydiahallie.com/blog/event-loop",
      },
    ],
  },
  {
    id: "modules",
    references: [
      {
        type: "basic",
        url: "https://javascript.info/modules",
      },
    ],
  },
  {
    id: "promise",
    references: [
      {
        type: "basic",
        url: "https://www.w3schools.com/js/js_promise.asp",
      },
    ],
  },
  {
    id: "fetch",
    references: [
      {
        type: "basic",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
    ],
  },
  {
    id: "validate",
    references: [
      {
        type: "basic",
        url: "https://www.freecodecamp.org/news/form-validation-in-javascript/",
      },
      {
        type: "basic",
        url: "https://react-hook-form.com/get-started#Quickstart",
      },
    ],
  },
  {
    id: "typescript",
    references: [
      {
        type: "basic",
        url: "https://www.typescripttutorial.net/",
      },
      {
        type: "basic",
        url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
      },
      {
        type: "advanced",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      },
    ],
  },
  {
    id: "vdom",
    references: [
      {
        type: "basic",
        url: "https://www.codecademy.com/article/react-virtual-dom",
      },
      {
        type: "basic",
        url: "https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/",
      },
      {
        type: "advanced",
        url: "https://www.freecodecamp.org/news/how-to-work-with-usememo-in-react/",
      },
    ],
  },
  {
    id: "general-react",
    references: [
      {
        type: "basic",
        url: "https://react.dev/learn",
      },
      {
        type: "advanced",
        url: "https://jser.dev/series/react-source-code-walkthrough/",
      },
    ],
  },
  {
    id: "performance-react",
    references: [
      {
        type: "advanced",
        url: "https://www.freecodecamp.org/news/how-to-work-with-usememo-in-react/",
      },
      {
        type: "advanced",
        url: "https://www.freecodecamp.org/news/react-performance-optimization-techniques/#heading-lazy-loading-images",
      },
    ],
  },
  {
    id: "state-management",
    references: [
      {
        type: "basic",
        url: "https://react.dev/learn/managing-state",
      },
      {
        type: "advanced",
        url: "https://thanhle.blog/blog/chon-lib-state-management-nao-bay-gio",
      },
    ],
  },
  {
    id: "module-bundler",
    references: [
      {
        type: "basic",
        url: "https://www.geeksforgeeks.org/difference-between-development-and-production-in-node-js/",
      },
      {
        type: "advanced",
        url: "https://vitejs.dev/config/",
      },
    ],
  },
  {
    id: "nextjs",
    references: [
      {
        type: "basic",
        url: "https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering",
      },
      {
        type: "basic",
        url: "https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation",
      },
      {
        type: "basic",
        url: "https://stackoverflow.com/a/76660152",
      },
      {
        type: "advanced",
        url: "https://nextjs.org/docs/app/building-your-application/caching",
      },
      {
        type: "basic",
        url: "https://nextjs.org/docs/pages/building-your-application/optimizing/images",
      },
      {
        type: "basic",
        url: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
      },
      {
        type: "basic",
        url: "https://blog.logrocket.com/using-cors-next-js-handle-cross-origin-requests/",
      },
    ],
  },
  {
    id: "websocket",
    references: [
      {
        type: "basic",
        url: "https://javascript.info/websocket",
      },
    ],
  },
  {
    id: "xss",
    references: [
      {
        type: "basic",
        url: "https://owasp.org/www-community/attacks/xss/",
      },
      {
        type: "basic",
        url: "https://gomakethings.com/how-to-sanitize-html-strings-with-vanilla-js-to-reduce-your-risk-of-xss-attacks/",
      },
    ],
  },
];

export const references: Reference[] = [
  {
    id: "https",
    references: [
      {
        type: "basic",
        url: "https://www.cloudflare.com/learning/ssl/why-is-http-not-secure",
      },
      {
        type: "basic",
        url: "https://www.freecodecamp.org/news/http-vs-https",
      },
      {
        type: "advanced",
        url: "https://movingtohttps.com",
      },
    ],
  },
  {
    id: "http",
    references: [
      {
        type: "advanced",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
      },
      {
        type: "basic",
        url: "https://eloquentjavascript.net/18_http.html",
      },
    ],
  },
  {
    id: "css-layout",
    references: [
      {
        type: "basic",
        url: "https://flexboxfroggy.com",
      },
      {
        type: "basic",
        url: "https://cssgridgarden.com",
      },
      {
        type: "advanced",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout",
      },
    ],
  },
  {
    id: "build-tools",
    references: [
      {
        type: "basic",
        url: "https://vitejs.dev",
      },
      {
        type: "basic",
        url: "https://www.geeksforgeeks.org/difference-between-development-and-production-in-node-js/",
      },
    ],
  },
  {
    id: "storage",
    references: [
      {
        type: "basic",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",
      },
      {
        type: "basic",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
      },
      {
        type: "advanced",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting",
      },
    ],
  },
  {
    id: "polling",
    references: [
      {
        type: "basic",
        url: "https://javascript.info/long-polling#regular-polling",
      },
    ],
  },
  {
    id: "git-commands",
    references: [
      {
        type: "basic",
        url: "https://learngitbranching.js.org",
      },
      {
        type: "basic",
        url: "https://ohmygit.org/",
      },
      {
        type: "advanced",
        url: "https://git-scm.com/book/en/v2",
      },
    ],
  },
  {
    id: "git-flow",
    references: [
      {
        type: "advanced",
        url: "https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow",
      },
    ],
  },
  {
    id: "cicd",
    references: [
      {
        type: "basic",
        url: "https://about.gitlab.com/topics/ci-cd",
      },
      {
        type: "advanced",
        url: "https://docs.github.com/en/actions",
      },
    ],
  },
  {
    id: "env",
    references: [
      {
        type: "basic",
        url: "https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments",
      },
      {
        type: "advanced",
        url: "https://github.com/theskumar/python-dotenv",
      },
      {
        type: "advanced",
        url: "https://pip.pypa.io/en/stable",
      },
    ],
  },
  ...backendReferences,
  ...frontendReferences,
];
