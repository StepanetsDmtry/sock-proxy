function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.slack-msgs.com") || 
    	shExpMatch(host, "*.dynamixsoftware.com") ||
    	shExpMatch(url, "http://dynamixsoftware.com/*")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return "SOCKS 165.227.174.65:1080; DIRECT";
    }

    return "DIRECT";
}
