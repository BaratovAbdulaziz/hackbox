// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const tools = [
    { name: 'Nmap', category: 'Reconnaissance', url: 'tools/nmap.html' },
    { name: 'Masscan', category: 'Reconnaissance', url: 'tools/masscan.html' },
    { name: 'Shodan', category: 'Reconnaissance', url: 'tools/shodan.html' },
    { name: 'Maltego', category: 'Reconnaissance', url: 'tools/maltego.html' },
    { name: 'Recon-ng', category: 'Reconnaissance', url: 'tools/recon-ng.html' },
    { name: 'theHarvester', category: 'Reconnaissance', url: 'tools/theharvester.html' },
    { name: 'Amass', category: 'Reconnaissance', url: 'tools/amass.html' },
    { name: 'FOCA', category: 'Reconnaissance', url: 'tools/foca.html' },
    { name: 'SpiderFoot', category: 'Reconnaissance', url: 'tools/spiderfoot.html' },
    { name: 'Sublist3r', category: 'Reconnaissance', url: 'tools/sublist3r.html' },
    { name: 'John the Ripper', category: 'Password Cracking', url: 'tools/john-the-ripper.html' },
    { name: 'Hashcat', category: 'Password Cracking', url: 'tools/hashcat.html' },
    { name: 'Hydra', category: 'Password Cracking', url: 'tools/hydra.html' },
    { name: 'Medusa', category: 'Password Cracking', url: 'tools/medusa.html' },
    { name: 'CrackMapExec', category: 'Password Cracking', url: 'tools/crackmapexec.html' },
    { name: 'Burp Suite', category: 'Web Application', url: 'tools/burp-suite.html' },
    { name: 'OWASP ZAP', category: 'Web Application', url: 'tools/owasp-zap.html' },
    { name: 'Nikto', category: 'Web Application', url: 'tools/nikto.html' },
    { name: 'Wfuzz', category: 'Web Application', url: 'tools/wfuzz.html' },
    { name: 'SQLmap', category: 'Web Application', url: 'tools/sqlmap.html' },
    { name: 'XSStrike', category: 'Web Application', url: 'tools/xsstrike.html' },
    { name: 'Gobuster', category: 'Web Application', url: 'tools/gobuster.html' },
    { name: 'Dirb', category: 'Web Application', url: 'tools/dirb.html' },
    { name: 'Dirbuster', category: 'Web Application', url: 'tools/dirbuster.html' },
    { name: 'Arachni', category: 'Web Application', url: 'tools/arachni.html' },
    { name: 'Aircrack-ng', category: 'Wireless', url: 'tools/aircrack-ng.html' },
    { name: 'Kismet', category: 'Wireless', url: 'tools/kismet.html' },
    { name: 'Wireshark', category: 'Wireless', url: 'tools/wireshark.html' },
    { name: 'Bettercap', category: 'Wireless', url: 'tools/bettercap.html' },
    { name: 'Reaver', category: 'Wireless', url: 'tools/reaver.html' },
    { name: 'Fern WiFi Cracker', category: 'Wireless', url: 'tools/fern-wifi-cracker.html' },
    { name: 'Wifite', category: 'Wireless', url: 'tools/wifite.html' },
    { name: 'Scapy', category: 'Wireless', url: 'tools/scapy.html' },
    { name: 'Metasploit Framework', category: 'Exploitation', url: 'tools/metasploit.html' },
    { name: 'BeEF', category: 'Exploitation', url: 'tools/beef.html' },
    { name: 'SET', category: 'Exploitation', url: 'tools/set.html' },
    { name: 'Empire', category: 'Exploitation', url: 'tools/empire.html' },
    { name: 'Covenant', category: 'Exploitation', url: 'tools/covenant.html' },
    { name: 'Mimikatz', category: 'Post-Exploitation', url: 'tools/mimikatz.html' },
    { name: 'PowerSploit', category: 'Post-Exploitation', url: 'tools/powersploit.html' },
    { name: 'LinPEAS', category: 'Post-Exploitation', url: 'tools/linpeas.html' },
    { name: 'WinPEAS', category: 'Post-Exploitation', url: 'tools/winpeas.html' },
    { name: 'BloodHound', category: 'Post-Exploitation', url: 'tools/bloodhound.html' },
    { name: 'Autopsy', category: 'Forensics', url: 'tools/autopsy.html' },
    { name: 'Volatility', category: 'Forensics', url: 'tools/volatility.html' },
    { name: 'Radare2', category: 'Forensics', url: 'tools/radare2.html' },
    { name: 'Ghidra', category: 'Forensics', url: 'tools/ghidra.html' },
    { name: 'OllyDbg', category: 'Forensics', url: 'tools/ollydbg.html' },
    { name: 'CloudSploit', category: 'Cloud Security', url: 'tools/cloudsploit.html' },
    { name: 'ScoutSuite', category: 'Cloud Security', url: 'tools/scoutsuite.html' }
];

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.category.toLowerCase().includes(query)
        );

        if (filteredTools.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.innerHTML = filteredTools.map(tool => 
            `<div class="search-result-item" onclick="window.location.href='${tool.url}'">
                <strong>${tool.name}</strong> - ${tool.category}
            </div>`
        ).join('');

        searchResults.style.display = 'block';
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Category card hover effects
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});