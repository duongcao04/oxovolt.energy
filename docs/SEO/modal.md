[03:29, 24/05/2026] Bjorn: ry popup should have it's own url : 

When a popup opens, the URL currently stays the same.
For SEO and navigation, it would be much better if each major popup had its own URL anchor.

Example:

* oxovolt.com/#immersed-battery-technology
* oxovolt.com/#thermal-fluid-architecture
* oxovolt.com/#modular-energy-systems

Recommended behavior:

* User clicks a CTA
* Popup opens
* URL updates automatically
* Closing the popup restores the previous URL

Benefits:

* Better SEO understanding for Google
* Stronger semantic structure
* Direct shareable links to specific technologies
* Better browser history/navigation
* Improved indexing for a one-page architecture

This is a major SEO improvement without needing to create additional pages or changing the premium UX.
open example : 

window.history.pushState({}, '', '#immersed-battery-technology')
close example :
window.history.pushState({}, '', '/')