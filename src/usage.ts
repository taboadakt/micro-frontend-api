import { state, events } from "./state";

export const setDataLimit = (limit, eventBus) => {
  state.data.total = state.data.total + limit;
  eventBus.publish(events.getUsage);
};
