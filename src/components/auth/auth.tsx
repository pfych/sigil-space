import Urbit from "@urbit/http-api";
import React, { useState } from "react";
import { setStateAction } from "../../utils";
import styles from "./auth.module.scss";

interface Props {
	setAirlock: setStateAction<Urbit | undefined>;
	setKnownShips: setStateAction<string[]>
}

const Auth = (props: Props): JSX.Element => {
	const { setAirlock, setKnownShips } = props;

	const [location, setLocation] = useState<string>("localhost:8081");
	const [ship, setShip] = useState<string>("");
	const [code, setCode] = useState<string>("");

	const blastOff = async () => {
		if (ship && code) {
			const airlock = await Urbit.authenticate({
				ship: ship,
				url: location,
				code: code,
				verbose: true
			});

			if (airlock) {
				setKnownShips((ships) => [...ships, airlock.ship || "pat"]);
				setAirlock(airlock);
			}
		}
	};
	return (
		<div className={styles.authContainer}>
			<h2>Authorise</h2>
			<input placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
			<input placeholder="Ship" value={ship} onChange={(e) => setShip(e.target.value)} />
			<input placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
			<button onClick={blastOff}>Blast Off</button>
		</div>
	);
};

export default Auth;
