import mitt from 'mitt'
type EventBus = {
  tagClicked: string
}
export const eventBus = mitt<EventBus>()
