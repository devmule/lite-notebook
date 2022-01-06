import '../libs/fontawesome.js';

import {AppScreen} from "./screen.js";

const screen = new AppScreen();

document.body.appendChild(screen.element);

(async () => {
	
	await screen.init();
	
	const url = new URL(window.location.href)
	const fileUrl = url.searchParams.get('reportUrl');
	if (fileUrl) await screen.loadReportFromUrl(fileUrl);
	
})();

