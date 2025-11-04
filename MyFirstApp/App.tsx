import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Button, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const isDark = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMessage(`Hello #${count}`), 500);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: '700' }}>MyFirstApp</Text>
          <Text>Count: {count}</Text>
          <Text>{message ?? 'Waiting…'}</Text>
          <Button title="Increment" onPress={() => setCount(c => c + 1)} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
