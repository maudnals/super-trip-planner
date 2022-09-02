export function getPresetTrips(): any {
  return {
    [`${self.crypto.randomUUID()}`]: {
      dates: {
        startDate: '2022-09-08',
        endDate: '2022-09-09',
      },
      title: 'Utrecht Fronteers 🧇',
      location: 'Utrecht',
      weather: {
        averageTemperature: 17.05,
        averagePrecipitationProbability: 57.1,
      },
    },
    [`${self.crypto.randomUUID()}`]: {
      dates: {
        startDate: '2022-09-11',
        endDate: '2022-09-12',
      },
      title: 'Sunday in Amsterdam 🥤',
      location: 'Amsterdam',
      weather: {
        averageTemperature: 16,
        averagePrecipitationProbability: 50,
      },
    },
    [`${self.crypto.randomUUID()}`]: {
      dates: {
        startDate: '2022-10-19',
        endDate: '2022-10-21',
      },
      title: 'Nantes DevFest conf 🥐',
      location: 'Nantes',
      weather: {
        averageTemperature: 12.466666666666667,
        averagePrecipitationProbability: 7.933333333333334,
      },
    },
  };
}
