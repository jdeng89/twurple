/** @private */
export function parseEmoteOffsets(emotes?: string): Map<string, string[]> {
	if (!emotes) {
		return new Map<string, string[]>();
	}

	return new Map(
		emotes
			.split('/')
			.map(emote => {
				const [emoteId, placements] = emote.split(':', 2);
				if (!placements) {
					return null;
				}
				return [emoteId, placements.split(',')] as [string, string[]];
			})
			.filter((e): e is [string, string[]] => e !== null)
	);
}
