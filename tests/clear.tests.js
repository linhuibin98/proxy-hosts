var dns = require('dns');
var expect = require('chai').expect;
var proxyHosts = require('../index');

describe('The clear method', function () {
    it('removes all DNS lookup overrides', function (done) {
        proxyHosts.add('nodejs.org', '1.2.3.4');

        proxyHosts.clear();

        dns.lookup('nodejs.org', function (err, address) {
            expect(address).to.not.equal('1.2.3.4');
            done();
        });
    });
});
