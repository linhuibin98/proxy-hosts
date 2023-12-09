var dns = require("dns");
var dnsPromise = require("dns/promises");
var expect = require("chai").expect;
var proxyHosts = require("../index");

describe("The method hijacking dns.lookup", function () {
  it("returns the family when doing DNS queries", function (done) {
    proxyHosts.add("*.foo.com", "1.2.3.4");
    dns.lookup(
      "a.foo.com",
      { family: undefined, hints: dns.ADDRCONFIG | dns.V4MAPPED },
      function (err, addr, family) {
        expect(addr).to.equal("1.2.3.4");
        expect(family).to.equal(4);
        done();
      }
    );
  });

  it("handles family-agnostic queries", function (done) {
    var error = null;
    try {
      dns.lookup(
        "nodejs.org",
        { family: undefined, hints: dns.ADDRCONFIG | dns.V4MAPPED },
        function (err) {
          expect(err).to.not.exist;
          done();
        }
      );
    } catch (err) {
      expect(err).to.not.exist;
      done();
    }
  });

  afterEach(function () {
    proxyHosts.clear();
  });
});

describe("The method hijacking dnsPromise.lookup", function () {
  it("returns the family when doing DNS queries", function (done) {
    proxyHosts.add("*.foo.com", "1.2.3.4");
    dnsPromise
      .lookup("a.foo.com", {
        family: undefined,
        hints: dns.ADDRCONFIG | dns.V4MAPPED,
      })
      .then((res) => {
        expect(res.address).to.equal("1.2.3.4");
        expect(res.family).to.equal(4);
        done();
      });
  });

  afterEach(function () {
    proxyHosts.clear();
  });
});
