export default {
  filters: {
    'Star rating': [
      { name: '1 star', checked: false },
      { name: '2 stars', checked: false },
      { name: '3 stars', checked: false },
      { name: '4 stars', checked: false },
      { name: '5 stars', checked: true },
    ],
    'Property type': [
      { name: 'Apartments', checked: false },
      { name: 'Hotels', checked: false },
      { name: 'Hostels', checked: false },
    ]
  },
  hotels: [
    {
      name: 'Hotel des Vosges',
      description: 'Located in the 20th district of Paris, just 700 metres from Père Lachaise Cemetery, Hotel des Vosges offers a 24-hour reception and free Wi-Fi access.',
      imageURL: 'https://s-ec.bstatic.com/xdata/images/hotel/square600/13072445.webp?k=9c12bda1f8c02f76fa0ea4a6ea00e6f7074753025bc0c187f7b6fc3076343401&o='
    },
    {
      name: 'We Loft',
      description: 'We Loft is a property set in Paris near Opéra Bastille. This bed and breakfast also has free WiFi.',
      imageURL: 'https://t-ec.bstatic.com/xdata/images/hotel/square600/96299078.webp?k=1ab1cd2966b00e21df37c28b1fed925f86da5a8834bacf06509397d26ffa8f26&o='
    },
    {
      name: 'Hipotel Paris Gambetta République',
      description: 'Located 500 metres from Père Lachaise Cemetery and 300 metres from Place Gambetta, Hipotel Gambetta offers en suite rooms with a flat-screen TV and a private bathroom.',
      imageURL: 'https://t-ec.bstatic.com/xdata/images/hotel/square600/45324268.webp?k=deb5c9732389dbe8e7411602b3b83cbb32d4c57b8c7842621d7d085fb2a4c9db&o='
    }
  ]
};