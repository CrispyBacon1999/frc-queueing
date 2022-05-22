import { EventService } from '../../../lib/TBAApi';

export async function get({ params }: any) {
	const eventCode = params.eventCode as string;

	const matches = await EventService.getEventMatchesSimple(eventCode);

	return {
		body: matches
			.filter((match) => match.comp_level === 'qm')
			.sort((x, y) => (x.match_number > y.match_number ? 1 : -1))
	};
}
