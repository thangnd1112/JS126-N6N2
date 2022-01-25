const main = document.getElementById("main");

const menu = [
	{ key: "home", label: "Home" },
	{ key: "about", label: "About", src:"assets/pages/about.html" },
	{ key: "team", label: "Team" },
	{ key: "menu", label: "Menu" },
	{ key: "shop", label: "Shop" },
	{ key: "contacts", label: "Contacts" }
];

const footerMenu = [
	{
		key: "company",
		label: "Company",
		children: [
			{ key: "about", label: "About Us" },
			{ key: "ourTeam", label: "Our Team" },
			{ key: "blog", label: "Blog" },
			{ key: "privacyPolicy", label: "Privacy Policy" },
		]
	},
	{
		key: "information",
		label: "Information",
		children: [
			{ key: "faq", label: "FAQ" },
			{ key: "terms", label: "Terms" },
			{ key: "deliveryInfo", label: "Delivery Info" },
			{ key: "refundPolicy", label: "Refund policy" },
			{ key: "contactUs", label: "Contact Us" },
		]
	},
	{
		key: "orders",
		label: "Orders",
		children: [
			{ key: "myAccount", label: "My Account" },
			{ key: "viewCart", label: "View Cart" },
			{ key: "wishlist", label: "Wishlist" },
			{ key: "checkout", label: "Checkout" },
		]
	},
]

function renderHeader () {
	main.innerHTML = `
		<div class="header-container">
			<div class="header-outer">
				<div class="header-main flex-between">
					<div class="header-left flex-center">
						<div class="logo"><img src="static/img/logo-light-180x180.png" width=90 /></div>
						<div id="menu-container"></div>
					</div>
					<div class="header-right flex-between">
						<div class="tools-icon flex-center cursor-pointer">
							<img src="static/img/search-icon.png" width=20 />
						</div>
						<div class="tools-icon flex-center cursor-pointer">
							<img src="static/img/cart-icon.png" width=20 />
						</div>
					</div>
				</div>
			</div>
		</div>`;
	const header = document.getElementById("menu-container");

	for (let item of menu) {
		header.innerHTML += `<a class="menu-item" href="${item.src}"><span class="menu-item cursor-pointer">${item.label}</span></a>`;
	}
}

function renderFooter () {
	main.innerHTML += `
		<div class="footer-container-outer">
			<div class="footer-container flex-wrap">
				<div class="col-lg-3 footer-item-grid">
					<div>
						<div class="footer-logo-item">
							<img src="static/img/logo-light-180x180.png" width=105 />
						</div>
						<div class="footer-logo-item">
							<p>Beans is the #1 local and family-owned cake shop & bakery aimed at making cakes that create long-lasting memories.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 footer-item-grid footer-contact">
					<div class="flex contact-item">
						<div class="footer-icon">
							<img src="static/img/location.png" />
						</div>
						<div>
							2130 Fulton Street,
							<br />
							San Diego, CA 94117-1080 USA
						</div>
					</div>
					<div class="flex contact-item">
						<div class="footer-icon">
							<img src="static/img/phone.png" />
						</div>
						<div>
							Call Us: 800-123-4567
						</div>
					</div>
					<div class="flex contact-item">
						<div class="footer-icon">
							<img src="static/img/email.png" />
						</div>
						<div>
							Send us an email
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom footer-container">
				<div class="flex-between">
					<div>© 2022 Beans. All Rights Reserved. Privacy Policy</div>
					<div>
						<span class="social-icon"><img src="static/img/fb.png" width=20 /></span>
						<span class="social-icon"><img src="static/img/ytb.png" width=20 /></span>
						<span class="social-icon"><img src="static/img/insta.png" width=20 /></span>
					</div>			
				</div>
			</div>
		</div>
	`;

	const footer = document.getElementsByClassName("footer-container")[0];
	for (let item of footerMenu) {
		footer.innerHTML += `
			<div class="footer-item-grid footer-item-grid-service">
				<div class="footer-item-title">${item.label}</div>
				<div id=${item.key} class="footer-item-content"></div>
			</div>
		`;

		const children = document.getElementById(item.key);
		for (let child of item.children) {
			children.innerHTML += `<div class="children-item">${child.label}</div>`;
		}
	}
}

function render() {
	renderHeader();
	renderFooter();
}

render();
