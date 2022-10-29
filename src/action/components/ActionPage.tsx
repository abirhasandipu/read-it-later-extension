import React = require("react");

export default function ActionPage() {

	const [tabInfo, setTabInfo] = React.useState("")

	React.useEffect(()=>{
		getCurrentTab()
	}, [])

	async function getCurrentTab() {
		let queryOptions = { active: true, lastFocusedWindow: true };
		// `tab` will either be a `tabs.Tab` instance or `undefined`.
		let [tab] = await chrome.tabs.query(queryOptions);
		// return tab;
		setTabInfo(tab.url)
	  }

	return <div>Read it Later {tabInfo}</div>;
}
