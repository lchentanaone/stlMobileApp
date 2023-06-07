import {StyleSheet} from 'react-native';

export const BetStyle = StyleSheet.create({
  betContainer: {
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 50,
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  titleSaveBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTotal: {},
  betTitle: {
    fontSize: 25,
    color: '#000',
    fontWeight: 500,
  },
  betTotal: {
    top: 10,
    fontSize: 16,
    color: '#000',
  },
  //----------------------
  dashboardBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 45,
    backgroundColor: '#0D99FF',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
