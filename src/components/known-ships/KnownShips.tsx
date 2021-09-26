import React from "react";
import Sigil from "../sigil/sigil";
import styles from "./known-ships.module.scss";

interface Props {
    knownShips: string[];
}

const KnownShips = (props: Props): JSX.Element => {
	const { knownShips } = props;

	return (
		<div className={styles.knownShips}>
			{knownShips.map(ship => <Sigil key={ship} patp={ship.length > 8 ? "err" : ship} />)}
		</div>);
};

export default KnownShips;
