# hosts proxy

Override the IP address returned for one or more domains.

Note: This module modifies the core DNS library's lookup function.

## Installation

```bash
pnpm add proxy-hosts
```

## Usage

```javascript
const proxyHosts = require("proxy-hosts");

// String match
proxyHosts.add("foo.com", "1.2.3.4");
// String with wild cards
proxyHosts.add("*foo.*", "1.2.3.4");
// RegExp match
proxyHosts.add(/^foo\.bar\..*$/i, "1.2.3.4");

// Remove domain entry
proxyHosts.remove("*foo.*", "1.2.3.4");

// Remove domain by matching the RegExp source attributes
// When no ip is passed any entry matching the domain will be removed
proxyHosts.remove(/^foo\.bar\..*$/i);

// Remove all domain entries
proxyHosts.clear();
```
