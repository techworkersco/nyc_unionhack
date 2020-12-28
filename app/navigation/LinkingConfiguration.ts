import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              DashboardScreen: 'one',
            },
          },
          WorkerList: {
            screens: {
              WorkerListScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
