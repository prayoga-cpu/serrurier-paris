// "Check your inbox" is only a useful instruction if it can be acted on, so the
// confirmation panel links straight to the visitor's own webmail.
//
// There is no standard way to open someone's mailbox: mailto: composes a NEW
// message, which is the opposite of what we want. The one thing we do know is
// the address they just typed, so the domain is mapped to its provider's inbox.
//
// The list leans French on purpose — orange.fr, free.fr, sfr.fr, laposte.net and
// bbox.fr together cover a large share of French consumer mail, and this site's
// visitors are French households. An unknown domain returns null and the panel
// falls back to plain text: a wrong link is worse than no link, because it sends
// someone hunting through a mailbox that was never theirs.

const WEBMAIL: Record<string, string> = {
  // Google
  "gmail.com": "https://mail.google.com/mail/u/0/#inbox",
  "googlemail.com": "https://mail.google.com/mail/u/0/#inbox",
  // Microsoft
  "outlook.com": "https://outlook.live.com/mail/0/",
  "outlook.fr": "https://outlook.live.com/mail/0/",
  "hotmail.com": "https://outlook.live.com/mail/0/",
  "hotmail.fr": "https://outlook.live.com/mail/0/",
  "live.com": "https://outlook.live.com/mail/0/",
  "live.fr": "https://outlook.live.com/mail/0/",
  "msn.com": "https://outlook.live.com/mail/0/",
  // Yahoo
  "yahoo.com": "https://mail.yahoo.com/",
  "yahoo.fr": "https://mail.yahoo.com/",
  "ymail.com": "https://mail.yahoo.com/",
  // Apple
  "icloud.com": "https://www.icloud.com/mail",
  "me.com": "https://www.icloud.com/mail",
  "mac.com": "https://www.icloud.com/mail",
  // Proton
  "proton.me": "https://mail.proton.me/",
  "protonmail.com": "https://mail.proton.me/",
  // French ISPs and providers
  "orange.fr": "https://mail.orange.fr/",
  "wanadoo.fr": "https://mail.orange.fr/",
  "free.fr": "https://zimbra.free.fr/",
  "sfr.fr": "https://webmail.sfr.fr/",
  "neuf.fr": "https://webmail.sfr.fr/",
  "laposte.net": "https://www.laposte.net/accueil",
  "bbox.fr": "https://www.mail.bbox.fr/",
  "numericable.fr": "https://webmail.sfr.fr/",
  "aliceadsl.fr": "https://mail.orange.fr/",
};

/**
 * The webmail inbox for an address, or null when the provider is unknown —
 * self-hosted domains, company addresses, anything not in the list above.
 */
export function inboxUrl(email: string | undefined): string | null {
  if (!email) return null;
  const at = email.lastIndexOf("@");
  if (at < 0) return null;
  const domain = email
    .slice(at + 1)
    .trim()
    .toLowerCase();
  return WEBMAIL[domain] ?? null;
}
