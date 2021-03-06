/*
  Default preference values for Torbutton for Thunderbird.
*/

pref("extensions.torbirdy.protected", false);
pref("extensions.torbirdy.proxy", 0);

/*
// Network settings.
pref("network.proxy.socks_remote_dns", true);
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 9050);
pref("network.proxy.socks_version", 5);
pref("network.proxy.no_proxies_on", "localhost, 127.0.0.1");
pref("network.proxy.type", 1);
pref("network.proxy.failover_timeout", 1800);

// Anything that would cause another proxy type to be used, we'll make them
// fail closed with the following - if it can fail closed, that is!
pref("network.proxy.ssl", "127.0.0.1");
pref("network.proxy.ssl_port", 8118);
pref("network.proxy.http", "127.0.0.1");
pref("network.proxy.http_port", 8118);
pref("network.proxy.ftp", "127.0.0.1");
pref("network.proxy.ftp_port", 8118);

// Assume that the local Tor supports Prop 171
// How can we set a unique l/p for the network.proxy.socks property?
// XXX TODO

// Override the user agent (empty string).
pref("general.useragent.override", "");

// Enable automatic updates.
pref("app.update.enabled", true);

// Prevent hostname leaks.
pref("mail.smtpserver.default.hello_argument", "127.0.0.1");

// Disable HTML email composing.
pref("mail.html_compose", false);
pref("mail.identity.default.compose_html", false);
pref("mail.default_html_action", 1);
pref("mailnews.wraplength", 72);

// https://lists.torproject.org/pipermail/tor-talk/2011-September/021398.html
// "Towards a Tor-safe Mozilla Thunderbird"
// These options enable a warning that tagnaq suggests.
pref("network.protocol-handler.warn-external.http", true);
pref("network.protocol-handler.warn-external.https", true);
pref("network.protocol-handler.warn-external.ftp", true);
pref("network.protocol-handler.warn-external.file", true);
pref("network.protocol-handler.warn-external-default", true);

// We hope the user has Enigmail and if so, we believe these improve security.
pref("extensions.enigmail.addHeaders", false);
pref("extensions.enigmail.useDefaultComment", true);
// XXX: TODO --hidden-recipient should be used for each person but perhaps
// --throw-keyids will be an OK stopgap?
pref("extensions.enigmail.agentAdditionalParam", "--no-emit-version --no-comments --throw-keyids --display-charset utf-8 --keyserver-options http-proxy=http://127.0.0.1:8118 --keyserver hkp://2eghzlv2wwcq7u7y.onion");
pref("extensions.enigmail.mimeHashAlgorithm", 5);

// Suggestions from the JAP team on how they'd configure thunderbird
// http://anonymous-proxy-servers.net/en/help/thunderbird.html
pref("network.cookie.cookieBehavior", 2);
pref("mailnews.start_page.enabled", false);
pref("mailnews.send_default_charset", "UTF-8");
pref("mailnews.send_plaintext_flowed", false);
pref("mailnews.display.prefer_plaintext", true);
pref("mailnews.display.disallow_mime_handlers", 1);
pref("mailnews.display.html_as", 1);
pref("rss.display.prefer_plaintext", true);
pref("mail.inline_attachments", false);

// Don't convert to our local date - this may matter in a reply, etc
pref("mailnews.display.original_date", true);

// Proxy bypass issues - disable them below:
pref("network.websocket.enabled", false);
pref("webgl.disabled", true);

// Likely privacy violations
pref("toolkit.telemetry.enabled", false);
pref("network.prefetch-next", false);
pref("network.http.spdy.enabled", false);

// https://blog.torproject.org/blog/experimental-defense-website-traffic-fingerprinting
// https://trac.torproject.org/projects/tor/ticket/3914
pref("network.http.pipelining", true);
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 12);

// misc security prefs
pref("security.OCSP.enabled", 1);
 // Default is always false for OCSP - it's broken crap
pref("security.OCSP.require", false);
pref("security.enable_tls_session_tickets", false);
pref("security.enable_ssl3", false);
pref("security.warn_entering_weak", true);
pref("security.warn_submit_insecure", true);
pref("security.ssl.enable_false_start", true);
pref("security.ssl.require_safe_negotiation", true);
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
*/
