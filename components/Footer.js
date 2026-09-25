import Link from "next/link";
import { version } from "../package.json";

const items = [
	["https://www.instagram.com/aytacworld2", "instagram", true],
	["https://www.facebook.com/aytacworld", "facebook", true],
	[
		"https://www.facebook.com/profile.php?id=61594075387955&sk=about",
		"facebook",
		true,
	],
	["/rss", "rss"],
];

const FooterLink = ({ url, icon, si }) => {
	const lib = si ? "si-fit si" : "mdi mdi";

	return (
		<Link href={url} className="text-2xl mr-1.5" target="_blank">
			<i className={`${lib}-${icon}`}></i>
		</Link>
	);
};

export default function Footer() {
	return (
		<footer className="flex justify-center items-center p-1">
			{items.map((x, i) => (
				<FooterLink key={i} url={x[0]} icon={x[1]} si={x[2]} />
			))}
			(v{version})
		</footer>
	);
}
