export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Keep one canonical host/protocol for crawlers and users.
    if (url.hostname === "www.netsalarymap.online" || url.protocol === "http:") {
      url.protocol = "https:";
      url.hostname = "netsalarymap.online";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
