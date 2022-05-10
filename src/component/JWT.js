import AsyncStorage from '@react-native-async-storage/async-storage';

const JWT = AsyncStorage.getItem('JWT');
export default JWT;
