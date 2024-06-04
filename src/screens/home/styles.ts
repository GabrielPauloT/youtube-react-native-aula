import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 28,
    width: 40,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: -0.5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  scrollView: {
    flex: 1,
  },
  shortsContainer: {
    marginTop: 8,

    paddingVertical: 20,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderBottomColor: '#4A4A4A',
    borderTopColor: '#4A4A4A',
  },
  shortsHeader: {
    marginBottom: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortsIcon: {
    height: 24,
    width: 20,
    marginRight: 9,
  },
  shortsText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: -0.5,
  },
  shortsScroll: {
    paddingHorizontal: 16,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 450,
  },
});
