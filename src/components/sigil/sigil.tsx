import React from "react";
import { reactRenderer, sigil } from "@tlon/sigil-js";
import styles from "./sigil.module.scss";

interface Props {
  patp: string;
}

const Sigil = (props: Props): JSX.Element => {
	const { patp } = props;

	return (
		<div className={styles.sigilWrapper}>
			{sigil({
				patp: patp,
				renderer: reactRenderer,
				colors: ["black", "white"],
			})}
		</div>
	);
};

export default Sigil;
