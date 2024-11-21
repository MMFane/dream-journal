import mitt from 'mitt'

type EventBusEvents = {
  tagClicked: string
}

export const eventBus = mitt<EventBusEvents>()
