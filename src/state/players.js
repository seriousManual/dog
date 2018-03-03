function getInitialState() {
  return [
    {color: '#f00', name: 'russell', cards: []},
    {color: '#00f', name: 'snyder', cards: []},
    {color: '#f0f', name: 'schneider', cards: []},
    {color: '#ff0', name: 'karussell', cards: []}
  ]
}

//missing in the current implementation: dealing and removing cards to users, changing color and player name

export default function reducer(state=getInitialState(), action) {
  switch (action.type) {
    //add some logic (e.g. adding cards, changeing the color, changing the name.......)
  }

  return state
}