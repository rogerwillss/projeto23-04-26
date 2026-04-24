import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import "./global.css";
import { Profile } from '@/app/Profile';
import { ToastProvider } from '@/components/Toast';

export default function App() {
  return (
    <>
      <ToastProvider>
      <Profile />
      <StatusBar style="light" />
      </ToastProvider>
    </>
  );
}
