import { EventService } from '../../../lib/TBAApi';

export async function get({ params }: any) {
	const eventCode = params.eventCode as string;

	const event = await EventService.getEventSimple(eventCode);

	return {
		body: event
	};
}
