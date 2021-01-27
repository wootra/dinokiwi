import youtube from "./youtube_icon.png";

export default function YoutubeIcon() {
	return (
		<img
			src={youtube}
			loading='lazy'
			alt='youtube icon'
			style={{ width: "1em", height: "1em" }}
		/>
	);
}
