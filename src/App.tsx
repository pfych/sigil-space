import Urbit from "@urbit/http-api";
import React, { useEffect, useState } from "react";
import { Fact, GraphUpdateAddNodes } from "./utils";
import Auth from "./components/auth/auth";
import KnownShips from "./components/known-ships/KnownShips";
import "./styles/overwrites.scss";

const App = (): JSX.Element => {
	const [airlock, setAirlock] = useState<Urbit>();
	const [knownShips, setKnownShips] = useState<string[]>([]);

	const handleFact = (fact: Fact): void => {
		console.info("Received Fact", fact);
		const addNodesEvent: GraphUpdateAddNodes = fact["graph-update"]?.["add-nodes"];

		if (addNodesEvent.resource.name === "dm-inbox") {
			const resource = addNodesEvent.nodes;
			for (const node of Object.keys(resource)) {
				const data = resource[node];

				if (!knownShips.includes(data.post.author)) {
					setKnownShips([...knownShips, data.post.author]);
				}
			}
		}

	};

	const subscribe = async (): Promise<void> => {
		if (airlock) {
			await airlock.subscribe({
				app: "graph-store",
				path: "/updates",
				event(data: unknown) {  handleFact(data); },
				err(data: unknown) { console.error("err", data); },
				quit(data: unknown) { console.error("kick", data); }
			});
		}
	};

	useEffect(() => {
		(async() => {
			if ( airlock ) {
				await subscribe();
			}
		})();
	}, [airlock]);

	return (
		<div className="App">
			<h1>Sigil Space</h1>
			<p>See Sigls of people who have Dirrectly messaged you</p>
			{!airlock && <Auth setAirlock={setAirlock} setKnownShips={setKnownShips} />}
			{airlock ? <KnownShips knownShips={knownShips} /> : <div />}
		</div>
	);
};

export default App;
