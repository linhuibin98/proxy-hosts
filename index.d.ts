interface IDomain {
    family: number;
    source: string | RegExp;
    domain: RegExp;
}

interface IHostsProxy {
    add(domain: string | RegExp, ip: string): void;
    remove(domain: string | RegExp, ip?: string): void;
    clear(): void;
    domains: Array<IDomain>;
}

const hostsProxy: IHostsProxy;

export default hostsProxy;
